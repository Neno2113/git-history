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
    components: {
        IconButton: {
            isActive: {
                backgroundColor: 'red',
            }
        },
        Input: {
            // variants: {
            //     outline: {
            //         backgroundColor: 'red',
            //         borderWidth:'1px',  
            //         borderColor: 'gray.500'
            //     }
            // }

            defaultProps: {
                border: '1px solid red'
            }
        }

        // Button: {
        //     variant: {
        //         'futuro': {
        //             backgroundColor: '#474343'
                
        //         }
        //     }
        // }
    }
});


export default theme;