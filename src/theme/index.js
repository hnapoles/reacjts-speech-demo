import { extendTheme } from '@chakra-ui/react'
import components from './components'
import colors from './colors'

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      html: {
        scrollBehavior: 'smooth',
      },
      'html, body': {
        fontFamily: "'Inter', sans-serif",
        boxSizing: 'border-box',
        color: 'brand.black',
      },
    }),
  },
  components: {
    ...components,
  },
  colors,
})
