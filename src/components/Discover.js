import React from "react"
import { AspectRatio, Box, Image, Text } from "@chakra-ui/react"

// https://www.youtube.com/embed/g3mVwt0B6G4
// chad https://www.youtube.com/embed/W-u6E8F0VcE

const ArtistsData = [
    {
        name: "Isaiah Rashad",
        genre: "Hip/Hop Rap",
        albums: [
            {
                title: "The House is Burning",
                songs: [
                    {
                        title: "Darkseid",
                        video: "https://www.youtube.com/embed/HylUT6v4G7I"
                    },
                    {
                        title: "From The Garden",
                        video: "https://www.youtube.com/embed/OG8LjpKAXt8"
                    },
                    {
                        title: "RIP Young",
                        video: "https://www.youtube.com/embed/B9-H_8ib_J4"
                    },
                    {
                        title: "Lay Wit Ya",
                        video: "https://www.youtube.com/embed/dzrQCsJzr70"
                    },
                    {
                        title: "Claymore",
                        video: "https://www.youtube.com/embed/KkfUhe_37A4"
                    },
                    {
                        title: "Headshots",
                        video: "https://www.youtube.com/embed/1NMZ0MpaEuY"
                    },
                    {
                        title: "All Herb",
                        video: "https://www.youtube.com/embed/NpcsssBx2Y0"
                    },
                    {
                        title: "Hey Mista",
                        video: "https://www.youtube.com/embed/RLTf44PGeRk"
                    },
                    {
                        title: "True Story",
                        video: "https://www.youtube.com/embed/4yl1YgS0BEw"
                    },

                    {
                        title: "Wat U Sed",
                        video: "https://www.youtube.com/embed/EU5rnwTXoaE"
                    },
                    {
                        title: "Don't Shoot",
                        video: "https://www.youtube.com/embed/8vfHD6hJvyY"
                    },
                    {
                        title: "Chad",
                        video: "https://www.youtube.com/embed/W-u6E8F0VcE"
                    },
                    {
                        title: "9 - 3 Freestyle",
                        video: "https://www.youtube.com/embed/nS4HQgp-W4Y"
                    },
                    {
                        title: "Score",
                        video: "https://www.youtube.com/embed/bAgK7FrI1pU"
                    },
                    {
                        title: "THIB",
                        video: "https://www.youtube.com/embed/YX6qWrHeZ2Y"
                    },
                    {
                        title: "HB2U",
                        video: "https://www.youtube.com/embed/P8j2_n4hynU"
                    },
                ]
            },
            {
                title: "The Suns Tirade",
                songs: [
                    {

                    }
                ]
            }
        ]
    }
]

export default function Discover() {
    const [video, setVideo] = React.useState("https://www.youtube.com/embed/dzrQCsJzr70")
    return (
        <div>
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

            <Text>Artists</Text>

            <Box boxSize="sm" mt="3em">
                <Image src="/img/artists/isaiahrashad2.jpeg" alt="Isaih Rashad" />
            </Box>
        </div>
    )
}