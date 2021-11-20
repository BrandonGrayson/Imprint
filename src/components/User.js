import React from "react"
import {Box, Text} from "@chakra-ui/react"

function Loading() {
    return <Text>Loading...</Text>
}



 function User() {
    const loading = true;
    const name = 'name'

    if (loading) {
        <Loading />
    }

    return (
    <Box>
        Hello, {name} 
    </Box>
    )
}

export default User