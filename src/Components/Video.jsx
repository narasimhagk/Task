import React, { useEffect } from 'react';
// import "../App.css"; // Make sure to create a Video.css file for styling

const Video = () => {
  const videoId = 'CdDCUyyyPc0'; // Your YouTube video ID

  useEffect(() => {
    // Load YouTube IFrame API script
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(script);

    // Initialize the YouTube player when the API is ready
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('video-player', {
        videoId: videoId,
        playerVars: {
          autoplay: 1, // Autoplay enabled
          controls: 1, // Show video controls
        },
      });
    };

    // Clean up
    return () => {
      document.body.removeChild(script);
      delete window.onYouTubeIframeAPIReady;
    };
  }, [videoId]);

  return <div id="video-player" className="video-container"></div>;
};

export default Video;
