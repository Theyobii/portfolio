import React from 'react'

const VideoBackground = ({ src, children }) => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <video className="h-full w-full object-cover" autoPlay loop muted playsInline>
        <source src={src} type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default VideoBackground
