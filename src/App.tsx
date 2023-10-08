import { ScaleFade, Container, Grid, Box,  GridItem, HStack, Text, Divider, Wrap } from "@chakra-ui/react"
import { FaCodeBranch } from 'react-icons/fa';

import { BranchIndicator } from "./components"
import { Outlet } from "react-router-dom";
import { useBranches } from "./hooks";


const App = () => {

  const { data, isSuccess } = useBranches();

  // console.log(branchesQuery);
  

  return (
    <ScaleFade
    // key={location.key}
    initialScale={0.9}
    in={true}
    delay={0.3}
  > 
    <Container  w='96vw' maxW='vw96' height='95vh' maxH='95vh' my={5} >
      <Grid
        h='full'
        templateRows='repeat(11, 1fr)'
        templateColumns={{  base: 'repeat(12, 1fr)' }}
        gap={1}
        // bgColor='#EFF2FA'
        borderTopRadius='50'
        borderLeftRadius='50'
        borderRightRadius='50'
      >
        <GridItem  
          // justifyContent=''
          rowSpan={11}
          colSpan={12}

        >
          <Box 
            w={{ sm: '95%', lg: '100%'}}
            h={{ sm: 'none', md: 'fit-context', lg: '100%', xl: 'scroll'}}
            bgColor='white' 
            borderRadius='50' 
            p={7} 
            overflowY='auto'
            overflowX='hidden'
            
          >
            <HStack justifyContent='center' >
                <Text as='b' fontSize='3xl' >Github History</Text>
            </HStack>

            <Divider border='1px' borderColor='black' />
                <Wrap mt={5}  spacing='10px' align='center' justify='center'>
                  {
                    (isSuccess ) &&
                      data?.map( branch => (
                        <div  key={branch.name}  >
                          <BranchIndicator 
                            icon={FaCodeBranch}  
                            indicatorText={branch.name} 
                           
                            commit={ branch.commit.sha }
                          />
                        </div>
                      ))
                  }
                </Wrap>
            <Outlet />
          </Box>
        </GridItem>
        
      </Grid>
    </Container>
  </ScaleFade> 
  )
}

export default App