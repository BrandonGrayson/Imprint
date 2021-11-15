import { Routes, Route } from "react-router-dom"
import { ChakraProvider, Box } from "@chakra-ui/react"
import Home from "./components/Home"
import Discover from "./components/Discover";
import theme from "./extendTheme"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
          </Routes>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
