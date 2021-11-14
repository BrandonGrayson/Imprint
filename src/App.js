import './App.css';
import Navbar from './components/Navbar'
import { ChakraProvider, Box } from "@chakra-ui/react"
import theme from './extendTheme';
import Hello from "../src/components/Home";
import Circle from "../src/components/Circle"
import { BrowserRouter } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
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
          {/* <Box style={{flexGrow: 1, backgroundColor: 'red'}}> Hello</Box> */}
          <Hello />
          <Circle />
        </Box>

      </ChakraProvider>
    </BrowserRouter>

  );
}

export default App;
