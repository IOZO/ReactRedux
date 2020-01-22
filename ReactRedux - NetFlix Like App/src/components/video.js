import React from 'react'
const BASE_URL="https://www.youtube.com/embed/";

const Video = function ({videoId}) {
    return(
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" title="Movie" alt="Movie cannot be played" src={`${BASE_URL}${videoId}`}/>
        </div>
    )
};

export default Video;