import { Routes, Route } from "react-router-dom"
import { ChakraProvider, Box } from "@chakra-ui/react"
import Home from "./components/Home"
import Discover from "./components/Discover";
import theme from "./extendTheme"
import Navbar from "./components/Navbar"
import Rick from "./components/Rick";
import MainPost from "./components/MainPost";
import ChildPost from "./components/ChildPost";
import Login from "./components/Login"

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
            <Route path="/tvshows" element={<Rick />} />
            <Route path="/blog" element={<MainPost />} >
              <Route path=":id" element={<ChildPost />} />
            </Route>
            <Route path="/login" element={<Login authed={false}/>} />
          </Routes>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
