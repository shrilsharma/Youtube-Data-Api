import React from 'react';

const videos = (props) => {
    return(
        <iframe width="560" height="315" title={props.videoId} src={`https://www.youtube.com/embed/${props.videoId}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    );
}

export default videos;