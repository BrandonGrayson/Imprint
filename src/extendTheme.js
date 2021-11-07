import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    styles: {
      global: {
        "html, body": {
          bg: "#2F303A",
          fontFamily: 'Poppins'
        }
      },
      colors: {
          brand: {
              100: "#f7fafc",
              900: "#2F303A"
          }
      }
    }
  });

export default theme