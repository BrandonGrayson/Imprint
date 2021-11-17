import React from "react"
import { AspectRatio, Box, Image, Text, Button } from "@chakra-ui/react"


function generateID() {
    return '_' + Math.random().toString(36).substr(2, 9)
}

// generate an Id for each item

function getArtistData() {
    return [
        {
            name: "Isaiah Rashad",
            genre: "Hip/Hop Rap",
            albums: [
                {
                    id: generateID(),
                    title: "The House is Burning",
                    songs: [
                        {
                            title: "Darkseid",
                            video: "https://www.youtube.com/embed/HylUT6v4G7I",
                            id: generateID()
                        },
                        {
                            title: "From The Garden",
                            video: "https://www.youtube.com/embed/OG8LjpKAXt8",
                            id: generateID()
                        },
                        {
                            title: "RIP Young",
                            video: "https://www.youtube.com/embed/B9-H_8ib_J4",
                            id: generateID()
                        },
                        {
                            title: "Lay Wit Ya",
                            video: "https://www.youtube.com/embed/dzrQCsJzr70",
                            id: generateID()
                        },
                        {
                            title: "Claymore",
                            video: "https://www.youtube.com/embed/KkfUhe_37A4",
                            id: generateID()
                        },
                        {
                            title: "Headshots",
                            video: "https://www.youtube.com/embed/1NMZ0MpaEuY",
                            id: generateID()
                        },
                        {
                            title: "All Herb",
                            video: "https://www.youtube.com/embed/NpcsssBx2Y0",
                            id: generateID()
                        },
                        {
                            title: "Hey Mista",
                            video: "https://www.youtube.com/embed/RLTf44PGeRk",
                            id: generateID()
                        },
                        {
                            title: "True Story",
                            video: "https://www.youtube.com/embed/4yl1YgS0BEw",
                            id: generateID()
                        },
    
                        {
                            title: "Wat U Sed",
                            video: "https://www.youtube.com/embed/EU5rnwTXoaE",
                            id: generateID()
                        },
                        {
                            title: "Don't Shoot",
                            video: "https://www.youtube.com/embed/8vfHD6hJvyY",
                            id: generateID()
                        },
                        {
                            title: "Chad",
                            video: "https://www.youtube.com/embed/W-u6E8F0VcE",
                            id: generateID()
                        },
                        {
                            title: "9 - 3 Freestyle",
                            video: "https://www.youtube.com/embed/nS4HQgp-W4Y",
                            id: generateID()
                        },
                        {
                            title: "Score",
                            video: "https://www.youtube.com/embed/bAgK7FrI1pU",
                            id: generateID()
                        },
                        {
                            title: "THIB",
                            video: "https://www.youtube.com/embed/YX6qWrHeZ2Y",
                            id: generateID()
                        },
                        {
                            title: "HB2U",
                            video: "https://www.youtube.com/embed/P8j2_n4hynU",
                            id: generateID()
                        },
                    ]
                },
            ]
        },
    ]
}



export default function Discover() {
    const [video, setVideo] = React.useState("https://www.youtube.com/embed/dzrQCsJzr70")

    const handleChange = () => {

    }
    return (
        <>
            <Box
             maxW="100vw"
             d='flex'
             justifyContent="center"
             fontSize="5xl">
                <Text>Spotlight Artists</Text>
            </Box>

            <Box
            >
                <AspectRatio
                    maxW="90vw"
                    maxH="90vh"
                    ratio={1}>
                    <iframe
                        title="Video Player"
                        src={video}
                        allowFullScreen
                    />
                    
                </AspectRatio>
                <Button onClick={handleChange}>Change</Button>
            </Box>

            <Box boxSize="sm" mt="3em">
                <Image src="/img/artists/isaiahrashad2.jpeg" alt="Isaih Rashad" />
            </Box>
        </>
    )
}