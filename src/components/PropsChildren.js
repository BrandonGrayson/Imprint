import React from 'react'
import { Box, Text } from "@chakra-ui/react"

export default function PropsChildren(props) {
    return (
    <Text>Hello: {props.children} </Text>
    )
}