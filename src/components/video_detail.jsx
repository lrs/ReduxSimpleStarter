import React from 'react';

const VideoDetail = ({video}) => {

  if (!video) {
    return <div><p>Loading...</p></div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="col-md-8 video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={ url }
        >
        </iframe>
      </div>
      <div className="details">
        <h4>{ video.snippet.title }</h4>
        <p>{ video.snippet.description }</p>
      </div>
    </div>
  );
}

export default VideoDetail;