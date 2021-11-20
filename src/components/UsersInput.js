import React from "react"
import { Input, Box, Text } from "@chakra-ui/react"
import Card from "./Card"

export default function UsersInput() {
    const [userName, setUserName] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [email, setEmail] = React.useState("")

    const onChange = (event) => {
        setUserName(event.target.value)

    }


    console.log(userName)
    return (
        <Box>
            <Input value={userName} onChange={onChange} placeholder="UserName"/>
            <Input />
            <Input />
            <Card />
        </Box>
    )
}