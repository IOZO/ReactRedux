import React,{Component} from 'react'
import '../components/search-bar'
import SearchBar from '../components/search-bar'
import VideoList from './video-list'
import VideoDetails from '../components/video-details'
import axios from 'axios';


const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const API_KEY = "api_key=7f65b0d50657cd375043d79b5445533b";



class App extends Component{

    constructor(props)
    {
        super(props);
        this.state={currentMovie:{},movieList:{}}
    }

    componentWillMount(){
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then((response)=>
        {
            this.setState({currentMovie:response.data.results[0]});
            this.setState({movieList:response.data.results.slice(1,6)});

            console.log("Movie : "+ JSON.stringify(this.state.currentMovie));
            console.log("Other Movies : " + JSON.stringify(this.state.movieList));
            
        });
    }

    render(){
                return (  
                <div>
                    <div><SearchBar/></div>
                    <div><VideoList/></div>
                    <div><VideoDetails title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/></div>
  
                 </div>
            );
        }
  }

  export default App;