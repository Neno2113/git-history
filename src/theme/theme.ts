import { extendTheme } from '@chakra-ui/react';


const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }
  

const theme = extendTheme({
    ...breakpoints,
    styles: {
        global: {
            'html, body': {
                backgroundColor: '#BCC1D8',
            }

        }
       
    },
    colors: {
        gitHubColor: {
          50: '#333',
          100: '#333',
          200: '#333',
          300: '#333',
          400: '#333',
          500: '#333',
          600: '#333',
          700: '#333',
          800: '#333',
          900: '#333',
        },
      },

});


export default theme;