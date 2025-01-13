'use client'

import { useEffect, useRef } from 'react'

export default function VideoBackground() {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75
        }
    }, [])

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            <video 
                ref={videoRef} 
                autoPlay
                loop
                muted

                className="w-full h-full object-cover "
                >
                    <source src="/videos/umimojiari.mp4" type='video/mp4' />
                </video>
        </div>
    )
}