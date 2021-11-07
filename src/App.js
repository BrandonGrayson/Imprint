import './App.css';
import Navbar from './components/Navbar'
import { ChakraProvider, Box } from "@chakra-ui/react"
import theme from './extendTheme';



function App() {
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
        <Box style={{flexGrow: 1, backgroundColor: 'red'}}> Hello</Box>
      </Box>

    </ChakraProvider>
  );
}

export default App;
