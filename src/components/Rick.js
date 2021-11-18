import { Box, Text } from "@chakra-ui/react"
import React from "react"

export default function Rick() {

    function getData() {
        return fetch('https://rickandmortyapi.com/api')
        .then((res) => res.json())
        .then((data) => console.log(data))
    }

    React.useEffect(() => {
        getData()
    })
    return (
        <Box>
            <Text>Rick And Morty</Text>
        </Box>
    )

}