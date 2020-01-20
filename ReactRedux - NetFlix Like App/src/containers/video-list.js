import React from 'react'
import VideoListItem from '../components/video-list-item'


const movies=["film1","film2","film3","film4","film5"];

const VideoList = () => {
    return(
       <div>
         <ul>
         <VideoListItem movie={movies[0]}/>
         <VideoListItem movie={movies[1]}/>
         <VideoListItem movie={movies[2]}/>
         <VideoListItem movie={movies[3]}/>
         <VideoListItem movie={movies[4]}/>
         </ul>
        </div>
    );
}

export default VideoList;