import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import '../css/Navbar.css';
import { Image } from '@chakra-ui/react';
import { UnorderedList } from "@chakra-ui/react"

export default function Navbar() {
    return (
        <header >
            <Box
             w="100%" 
             h="5rem" 
             className="default-styles" 
             display='flex' 
             justifyContent="space-between" 
             alignItems='center'
             >
                <Box display="flex">
                    <Image
                     src="/img/imprint-logo.jpeg" 
                     alt="naruto" 
                     objectFit="cover" 
                     boxSize="2em" 
                     mx="1rem"
                     />
                    <Link
                     mx=".1rem" 
                     my=".2rem" 
                     _hover={{textDecoration: 'none', color: "#ababab"}}
                     >Imprint
                     </Link>
                </Box>
                <nav >
                    <UnorderedList display="flex">
                        <Link
                         _hover={{textDecoration: 'none', color: "#ababab"}} 
                       
                         > Discover </Link>
                    </UnorderedList>
                </nav>
            </Box>
        </header>
    );
}
