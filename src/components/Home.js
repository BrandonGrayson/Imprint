import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';

// flex grow worked in this box: style={{flexGrow: 1, backgroundColor: 'red'}}

export default function Home() {
    return (
        <Box
            d="flex"
            alignItems="stretch"
            justifyContent="space-between"
            flexGrow="1"
            >
            <Box
             d="flex"
             flexGrow="1"
             maxH="70vh"
             alignSelf="end"
            >
                <Image
                 src="/img/landing-page-girl.png" 
                 alt="girl enjoying music" 
                 objectFit="contain"
                 />
            </Box>
            <Box
             d="flex"
             flexDirection="column"
             alignItems="flex-start"
             alignSelf="center"  
             m="1rem"
             maxW="100%"
             flexGrow="2"

             >
                <Text pb=".5rem" fontWeight="bold" fontSize="4xl">Be Inspired</Text>
                <Text pb="1rem" fontWeight="normal" fontSize="md">Dedicated to people who left their mark</Text>
                <Button size="md" bg="#1762A7" variant="solid">
                    Enter
				</Button>
            </Box>
        </Box>
    );
}
