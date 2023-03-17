import React from 'react';
import VideoFeed from './VideoFeed';
import Navbar from './Navbar';
import HeaderTabs from './HeaderTabs';
import SideButtons from './SideButtons';

function createVideos() {
  return [1,2,3,4].map((v) => {
    return {
      id: v,
      url: `./assets/${v}.mp4`,
      description: `Sample video ${v}`,
    }
  })
}

const App = () => {
  const sampleVideos = createVideos();
  console.log(sampleVideos);

  return (
    <div className="app">
      <HeaderTabs />
      <VideoFeed videos={sampleVideos} />
      <SideButtons />
      <Navbar />
    </div>
  );
};

export default App;
