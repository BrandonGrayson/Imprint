import React from "react"
import { AspectRatio } from "@chakra-ui/react"

// https://www.youtube.com/embed/g3mVwt0B6G4

export default function Discover() {
    return (
        <div>
            <AspectRatio 
            maxW="90vw" 
            maxH="90vh"
            ratio={1}>
                <iframe
                    title="Video Player"
                    src="https://www.youtube.com/embed/fb-K-3arN9c"
                    allowFullScreen
                />
            </AspectRatio>
        </div>
    )
}