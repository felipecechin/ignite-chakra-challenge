import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    lightText: '#F5F8FA',
    lightInfo: "#DADADA",
    headingsAndText: "#47585B"
  },
  styles: {
    global: {
      body: {
        bg: '#f5f8fa',
      }
    }
  }
})