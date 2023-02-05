import React from 'react'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

const Video: React.FC = () => {
  return (
    <ReactPlayer
      url='/vid/GolfAlpine.mp4'
      muted={true}
      playsInline={true}
      preload='auto'
      playing={true}
      autoPlay={true}
      loop={true}
      width='100%'
      height='100%'
      style={{
        padding: 0,
        paddingTop: 130,
        left: 0,
        zIndex: -1,
        maxHeight: '100%',
        maxWidth: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
      }}
    />
  )
}

export default Video
