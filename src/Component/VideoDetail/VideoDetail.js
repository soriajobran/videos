import React from 'react';

const VideoDetail = props => {
    if(!props.video) {
        return(
            <div >
                 <p>Loading...</p> 
            </div>
        ); 
    }

    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;

    return (
        <div> 
            <div className="ui embed">
            <iframe title="Video Player" src={videoSrc} ></iframe>
            </div>
            <div className="ui segment">
                <h2 className="header">{props.video.snippet.title} </h2>
                <p> {props.video.snippet.description} </p>
            </div>
        </div>
    );
}

export default VideoDetail;