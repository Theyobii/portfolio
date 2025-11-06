import React from 'react';

const VideoBackground = ({ src, children }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex justify-center items-center">
      <video
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline 
      >
        <source src={src} type="video/mp4" />
        {<source src={src} type="./public/background.mp4" />}
        Tu navegador no soporta el tag de video.
      </video>
      <div className="relative z-10 text-white text-center p-5">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;