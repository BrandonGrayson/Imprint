import React from "react"
import { Input, Box, Text } from "@chakra-ui/react"
import Card from "./Card"
import PropsChildren from "./PropsChildren"

export default function UsersInput({authed}) {
    const [userName, setUserName] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [email, setEmail] = React.useState("")

    const onChange = (event) => {
        event.preventDefault()
        console.log(event)
        setUserName(event.target.value)
    }

    console.log(userName)
    return (
        <Box>
            <Input value={userName} onChange={onChange} placeholder="UserName"/>
            <Input />
            <Input />
            <Card />
            <PropsChildren>
                <Text>This is the Props Children</Text>
            </PropsChildren>
        </Box>
    )
}