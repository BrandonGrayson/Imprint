import React from 'react';
import { Box } from '@chakra-ui/react';
import '../css/Navbar.css';
import { Image } from '@chakra-ui/react';
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"

export default function Navbar() {
    return (
        <header>
            <Box w="100%" h="100%" bg="#2F303A" className="default-styles">
                <Box display="flex">
                    <Image src="/img/imprint-logo.jpeg" alt="naruto" objectFit="cover" boxSize="2em" />
                    <Box>Imprint</Box>
                </Box>
                <nav>

                </nav>
            </Box>
        </header>

    );
}
