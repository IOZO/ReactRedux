import React,{Component} from 'react'
import '../components/search-bar'
import SearchBar from '../components/search-bar'
import VideoList from './video-list'
import VideoDetails from '../components/video-details'
import Video from '../components/video'
import axios from 'axios';
import { $CombinedState } from 'redux'


const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const SEARCH_URL = "search/movie?language=fr&include_adult=false"
const API_KEY = "api_key=7f65b0d50657cd375043d79b5445533b";



class App extends Component{

    constructor(props)
    {
        super(props);
        this.state={currentMovie:{},movieList:{}}
    }

    
    componentWillMount(){
        this.initMovies();
    }
    
    initMovies(){
            axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`)
            .then((response)=>{
                this.setState(
                        {
                         currentMovie:response.data.results[0],
                         movieList:response.data.results.slice(1,6)
                        },
                        (()=>{
                            this.applyVideoToCurrentMovie();
                        })
                    );
            });      
    }

    applyVideoToCurrentMovie(){
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?append_to_response=videos&include_adult=false&${API_KEY}`)
        .then((response)=>{
            if(response.data.videos.results.length > 0)
            {
                const youTubeVideo = response.data.videos.results[0].key;
                let newCurrentMovieState = this.state.currentMovie;
                newCurrentMovieState.videoId = youTubeVideo;
                this.setState({currentMovie : newCurrentMovieState});
            }
        });    
    }

    onClickListItem(movie){
        this.setState({currentMovie:movie},function(){
            this.applyVideoToCurrentMovie();
            this.setRecommendations();
        });
    }
    
    onClickSearch(searchText){
        if(searchText)
        {
            axios.get(`${API_END_POINT}${SEARCH_URL}&query=${searchText}&${API_KEY}`)
            .then((response)=>{
                if(response.data && response.data.results[0]){
                    if(response.data.results[0].id != this.state.currentMovie.id)
                    {
                        this.setState(
                            {
                             currentMovie:response.data.results[0]
                            },
                            (()=>{
                                this.applyVideoToCurrentMovie();
                                this.setRecommendations();
                            })
                        );
                    }
                }
                });    
        } 
    }

    setRecommendations(){
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}/recommendations?${API_KEY}&language=fr&include_adult=false`)
        .then((response)=>{
            this.setState(
                    {
                     movieList:response.data.results.slice(0,5)
                    }
                );
        });      
    }

    render(){
        const renderList = () =>{
        if(this.state.movieList.length > 0)
            {
                return(<VideoList movieList={this.state.movieList} callback={this.onClickListItem.bind(this)}/>)
            }
        }
        
        return (  
                <div>
                    <div className="search_bar">
                        <SearchBar callback={this.onClickSearch.bind(this)}/>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <Video videoId={this.state.currentMovie.videoId}/>
                            <VideoDetails title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/>
                        </div>
                        <div className="col-md-4">
                            {renderList()}
                        </div>
                    </div>
                </div>
            );
        }
  }

  export default App;