import React from 'react'
import { Box, Text} from "@chakra-ui/react"

export default function Login({authed}) {

    return (
        <Box>
            <Text> 
                {
                    authed ? "Login Normally" : "Register"
                }</Text>
        </Box>
    )
}