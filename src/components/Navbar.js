import React from 'react'
import {extendTheme} from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"
import "../css/Navbar.css"



export default function Navbar() {
    return (
        <Box w="100%" h="100%" bg="#2F303A" className="default-styles">    
            <h1>This is the navbar</h1>
        </Box>
    )
}