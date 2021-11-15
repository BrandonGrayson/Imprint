import React from "react"
import theme from '../extendTheme';
import { ChakraProvider, Box } from "@chakra-ui/react"
import Navbar from './Navbar'


export default function Layout() {
    return (
        <ChakraProvider theme={theme}>
        <Box
          bg="brand.900"
          minH="100vh"
          maxW="1300px"
          mx="auto"
          my={0}
          px="20px"
          py={0}
          d="flex"
          flexDirection="column">
          <Navbar />

          
        </Box>
      </ChakraProvider>
    )

}