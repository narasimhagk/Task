import React, { useEffect } from 'react';
import './Video.css'; 

const Video = () => {
  const videoId = 'K4TOrB7at0Y'; 

  useEffect(() => {
    
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(script);

    
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('video-player', {
        videoId: videoId,
        playerVars: {
          autoplay: 1, 
          controls: 1, 
          mute: 1,     
        },
      });
    };

 
    return () => {
      document.body.removeChild(script);
      delete window.onYouTubeIframeAPIReady;
    };
  }, [videoId]);

  return <div id="video-player" className="video-container">
    
  </div>;
};

export default Video;
