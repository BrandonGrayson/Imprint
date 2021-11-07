import './App.css';
import Navbar from './components/Navbar'
import { ChakraProvider, Box } from "@chakra-ui/react"
import theme from './extendTheme';



function App() {
  return (

    <ChakraProvider theme={theme}>
      <Box bg="brand.900" h="100vh">
        <Navbar />
      </Box>

    </ChakraProvider>
  );
}

export default App;
