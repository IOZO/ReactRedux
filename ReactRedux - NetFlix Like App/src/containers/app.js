import React from 'react'
import '../components/search-bar'
import SearchBar from '../components/search-bar'
import VideoList from './video-list'


const App=function(){
    return (  
        <div>
            <div><SearchBar/></div>
            <div><VideoList/></div>
        </div>
    );
  }

  export default App;