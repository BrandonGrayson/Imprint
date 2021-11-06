import React from 'react'
import { extendTheme } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"
import "../css/Navbar.css"
import { AspectRatio } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"


export default function Navbar() {
    return (
        <Box w="100%" h="100%" bg="#2F303A" className="default-styles">
            <AspectRatio maxW="4em" ratio={4 / 4}>
                <Image src="/img/imprint-logo.jpeg" alt="naruto" objectFit="cover" />
            </AspectRatio>
        </Box>
    )
}