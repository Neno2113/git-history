import { ScaleFade, Container, Grid, Box,  GridItem, HStack, SimpleGrid, Text, Divider, Wrap } from "@chakra-ui/react"
import { FaCodeBranch } from 'react-icons/fa';

import { CommitCard, BranchIndicator } from "./components"


const App = () => {
  return (
    <ScaleFade
    // key={location.key}
    initialScale={0.9}
    in={true}
    delay={0.3}
  > 
    <Container  w='96vw' maxW='99vw' height='95vh' maxH='95vh' my={5} >
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
            w={{ sm: '97%', lg: '100%'}}
            h="100%"
            bgColor='white' 
            borderRadius='50' 
            p={7} 
          >
            <HStack justifyContent='center' >
                <Text as='b' fontSize='3xl' >Github History</Text>
            </HStack>

            <Divider border='1px' borderColor='black' />
            {/* <HStack w='full'> */}
                <Wrap mt={5}  spacing='10px' align='center' justify='center'>
                    <BranchIndicator icon={FaCodeBranch}   indicatorText='Levantamiento'  />
                    <BranchIndicator icon={FaCodeBranch}   indicatorText='Levantamiento'  />
                    <BranchIndicator icon={FaCodeBranch}   indicatorText='Levantamiento'  />
                    <BranchIndicator icon={FaCodeBranch}   indicatorText='Levantamiento'  />
                    <BranchIndicator icon={FaCodeBranch}   indicatorText='Levantamiento'  />
                    <BranchIndicator icon={FaCodeBranch}   indicatorText='Levantamiento'  />
                    <BranchIndicator icon={FaCodeBranch}   indicatorText='Levantamiento'  />
                    <BranchIndicator icon={FaCodeBranch}   indicatorText='Levantamiento'  />
                    <BranchIndicator icon={FaCodeBranch}   indicatorText='Levantamiento'  />
                    <BranchIndicator icon={FaCodeBranch}   indicatorText='Levantamiento'  />
                    <BranchIndicator icon={FaCodeBranch}   indicatorText='Levantamiento'  />
                    <BranchIndicator icon={FaCodeBranch}   indicatorText='Levantamiento'  />
                    <BranchIndicator icon={FaCodeBranch}   indicatorText='Levantamiento'  />
                    <BranchIndicator icon={FaCodeBranch}   indicatorText='Levantamiento'  />
                    <BranchIndicator icon={FaCodeBranch}   indicatorText='Levantamiento'  />
                    <BranchIndicator icon={FaCodeBranch}   indicatorText='Levantamiento'  />
                    <BranchIndicator icon={FaCodeBranch}   indicatorText='Levantamiento'  />
                    <BranchIndicator icon={FaCodeBranch}   indicatorText='Levantamiento'  />
                </Wrap>
            {/* </HStack> */}

            <SimpleGrid columns={{ sm: 1, md: 2, lg:3, xl:4, '2xl':5  }} spacing={2} w={'full'} mt={10} alignItems='center' >
                <GridItem   >
                  <CommitCard 
                      projectName={'Emergencia Web'} 
                      projectStatus={'En Desarrollo'} 
                      projectProgressNumber={10} 
                      projectTimeLeft='4 Days left'             
                  />
                </GridItem>
                <GridItem  >
                  <CommitCard 
                      projectName={'Emergencia Web'} 
                      projectStatus={'En Desarrollo'} 
                      projectProgressNumber={10} 
                      projectTimeLeft='4 Days left'             
                  />
                </GridItem>
                <GridItem  w='full' >
                  <CommitCard 
                      projectName={'Emergencia Web'} 
                      projectStatus={'En Desarrollo'} 
                      projectProgressNumber={10} 
                      projectTimeLeft='4 Days left'             
                  />
                </GridItem>
                <GridItem  w='full' >
                  <CommitCard 
                      projectName={'Emergencia Web'} 
                      projectStatus={'En Desarrollo'} 
                      projectProgressNumber={10} 
                      projectTimeLeft='4 Days left'             
                  />
                </GridItem>
                <GridItem  w='full' >
                  <CommitCard 
                      projectName={'Emergencia Web'} 
                      projectStatus={'En Desarrollo'} 
                      projectProgressNumber={10} 
                      projectTimeLeft='4 Days left'             
                  />
                </GridItem>
                <GridItem  w='full' >
                  <CommitCard 
                      projectName={'Emergencia Web'} 
                      projectStatus={'En Desarrollo'} 
                      projectProgressNumber={10} 
                      projectTimeLeft='4 Days left'             
                  />
                </GridItem>
            </SimpleGrid>
          </Box>
        </GridItem>
        
      </Grid>
    </Container>
  </ScaleFade> 
  )
}

export default App