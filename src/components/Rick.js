import { Box, Text, List, ListItem } from "@chakra-ui/react"
import React from "react"

// function getData() {
//     return fetch("https://rickandmortyapi.com/api/character/?page=2")
//     .then((res) => res.json())
//     .then((data) => {
//         return data
//     })
// }

function Loading() {
    return <p>Loading...</p>
}

export default function Rick() {
    const [characters, setCharacters] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        return fetch("https://rickandmortyapi.com/api/character/?page=2")
            .then((res) => res.json())
            .then((data) => {
                setCharacters(data)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Loading />
    }

    console.log(characters)

    return (
        <Box>
            <List>
                {
                    characters.results.map(({name}) => {
                        return <ListItem>{name}</ListItem>
                    })
                }
            </List>
        </Box>
    )
}