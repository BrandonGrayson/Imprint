import React from "react"
import { AspectRatio, Box, Image, Text, Button } from "@chakra-ui/react"

function getData() {
   const data = fetch('http://www.boredapi.com/api/activity/')
   .then(response => response.json())
   .then(data => console.log(data));

   return data
}

export default function Discover() {
    const [video, setVideo] = React.useState("https://www.youtube.com/embed/dzrQCsJzr70")
    const [data, setData] = React.useState(null)

    React.useEffect(() => {
        getData()
        .then(setData)
    }, [])


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
            </Box>

            <Box boxSize="sm" mt="3em">
                <Image src="/img/artists/isaiahrashad2.jpeg" alt="Isaih Rashad" />
            </Box>
        </>
    )
}