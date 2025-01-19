'use client'

import { useEffect, useRef } from 'react'

export default function VideoBackground() {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75

            const playVideo = async () => {
                try {
                    await videoRef.current?.play()
                } catch (error) {
                    console.log("video auto play error:", error)
                }
            }
            playVideo()

            const handleInteraction = () => {
                playVideo()
                document.removeEventListener('touchstart', handleInteraction)
            }
            
            document.addEventListener('touchstart', handleInteraction)

            return () => {
                document.removeEventListener('touchstart', handleInteraction)
            }
        }
    }, [])

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            <video 
                ref={videoRef} 
                autoPlay
                loop
                muted
                playsInline
                className="w-auto h-full object-cover min-w-full md:object-[center_center] object-[50%_center] md:scale-100 scale-[1.2]"
            >
                <source src="/videos/umimojiari.mp4" type='video/mp4' />
            </video>
        </div>
    )
}