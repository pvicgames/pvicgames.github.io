//import React from 'react'

const VideoBackground = () => {
  return (
    <video
      className="fixed min-w-screen min-h-screen bottom-0 left-0 object-cover overflow-hidden
                 grayscale opacity-8 z-[-10] blur-[2px]"
      autoPlay
      loop
      muted
    >
      <source className="" src="videos/artius.mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBackground;
