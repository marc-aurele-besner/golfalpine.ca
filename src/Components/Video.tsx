import { min } from "lodash"
import React from "react"
import ReactPlayer from 'react-player'
import { maxHeight } from "styled-system"

const Video: React.FC = () => {
    return (
        <ReactPlayer 
            url="/vid/GolfAlpine.mp4" 
            muted={true} 
            playsInline={true}
            preload="auto"
            playing={true} 
            autoPlay={true}
            loop={true} 
            width="100%" 
            height="100%"
        />
    )
}

export default Video