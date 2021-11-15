import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { UnorderedList } from "@chakra-ui/react"
import { Link as RouteLink} from "react-router-dom"



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
                     alt="imprint logo" 
                     objectFit="cover" 
                     boxSize="2em" 
                     mx="1rem"
                     />
                    <Link
                     mx=".1rem" 
                     my=".2rem" 
                     _hover={{textDecoration: 'none', color: "#ababab"}}
                     as={RouteLink}
                     to="/"
                     >Imprint
                     </Link>
                </Box>
                <nav >
                    <UnorderedList display="flex">
                        <Link
                        as={RouteLink}
                         _hover={{textDecoration: 'none', color: "#ababab"}} 
                        to="/discover"
                         > Discover </Link>
                    </UnorderedList>
                </nav>
            </Box>
        </header>
    );
}
