import React from 'react'
import { Box, Text, Button } from "@chakra-ui/react"
import fetchPost from '../api/fetchPosts'
import { Outlet } from 'react-router-dom'

export default function MainPost() {
    
    return (
        <Box>
            <Text>This is the Main Blog Component</Text>
            <Button bg="blue.400">Get Post</Button>

            <Outlet />
        </Box>
    )
}