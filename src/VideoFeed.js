import React, { useState } from 'react';
import Video from './Video';
import { useSwipeable } from 'react-swipeable';

const VideoFeed = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleSwipeUp = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
  };

  const handleSwipeDown = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
  };

  const onLoadedMetadata = (e) => {
    e.target.currentTime = 1; // To avoid black screen on video change
  };

  const swipeHandlers = useSwipeable({
    onSwipedUp: handleSwipeUp,
    onSwipedDown: handleSwipeDown,
  });

  return (
    <div className="video-feed" {...swipeHandlers}>
      <Video
        key={videos[currentVideoIndex].id}
        videoUrl={videos[currentVideoIndex].url}
        description={videos[currentVideoIndex].description}
        onLoadedMetadata={onLoadedMetadata}
      />
    </div>
  );
};

export default VideoFeed;
