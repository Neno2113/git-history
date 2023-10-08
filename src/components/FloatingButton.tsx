import { FC } from "react";
import { Button, Box } from "@chakra-ui/react"
import { FaCodeBranch } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

interface Props {
}

export const FloatingButton:FC<Props> = () => {
    const { pathname }  = useLocation()
    const navigate = useNavigate();
    
    const toggleFrontAndBackend = () => {
        if( pathname === '/'){
            navigate('/backend')
        } else {
            navigate('/')
        }
    }

    
    return (
        <Box
            position='fixed'
            left={150}
            top={10}
        >
            <Button 
                leftIcon={ <FaCodeBranch /> }
                colorScheme="gitHubColor" 
                size="lg"
                borderRadius='full'
                onClick={ toggleFrontAndBackend}
            >
                {
                    (pathname === '/')  
                        ? "Backend"
                        : "FrontEnd" 

                }
            </Button>
        </Box>
    )
}
