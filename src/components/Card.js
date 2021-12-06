import React from "react"
import { Box, List, ListItem } from "@chakra-ui/react"

export default function Card(props) {
    console.log(props)
    return (
        <Box>
            {/* <List>
                {props.characters.results.map(({ name, id }) => {
                   return <ListItem
                        key={id}
                    >
                        {name}
                    </ListItem>
                })}
                <h1>Card Component</h1>
            </List> */}
        </Box>
    )
}