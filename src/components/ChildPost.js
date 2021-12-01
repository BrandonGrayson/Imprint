import React from "react"
import { useParams } from "react-router-dom"
import { Box, Text } from "@chakra-ui/react"


export default function ChildPost() {

    const { id } = useParams()
    return (
        <Box>
            <Text>Child Post Component</Text>
            <Text>We are at Post Number {id}</Text>
        </Box>
    )
}