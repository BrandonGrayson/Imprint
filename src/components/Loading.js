import React from "react"
import {Box, Text} from "@chakra-ui/react"

export default function IsLoading() {

    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    })

    if (loading) {
        return <h1>loading...</h1>
    }

    return (
        <Box>
            <Text>Component is Done Loading</Text>
        </Box>
    )
}