import React, { useRef, useEffect } from 'react';

const Video = ({ videoUrl, description, onLoadedMetadata }) => {
  const videoRef = useRef();

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('loadedmetadata', onLoadedMetadata);
    }
  }, [onLoadedMetadata]);

  return (
    <div className="video">
      <video
        ref={videoRef}
        src={videoUrl}
        className="video"
        loop
        autoPlay
        playsInline
        muted
      ></video>
      <div className="video-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Video;
