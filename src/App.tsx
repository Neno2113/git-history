import { ScaleFade, Container, Grid, Box,  Flex, GridItem, HStack, Icon, SimpleGrid, Text } from "@chakra-ui/react"
import { MdOutlineCloudDone, MdOutlineDesignServices } from  "react-icons/md";
import { FaLaptopCode, FaPeopleCarry } from 'react-icons/fa';
import { GiThink } from 'react-icons/gi';
import { AiOutlineMenu } from "react-icons/ai"

import { ProjectCard, ProjectIndicator } from "./components"


export enum CardVariant {
  Unassigned = '#BCC1D8',
  Assigned = '#FDCA9C',
  Done = '#75DDA7',
  All = '#FFF'
}

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
        templateRows='repeat(12, 77px)'
        templateColumns={{  base: 'repeat(12, 1fr)' }}
        gap={1}
        bgColor='#EFF2FA'
        borderTopRadius='50'
        borderLeftRadius='50'
        borderRightRadius='50'
      >
          <Flex 
            // justifyContent=''
            w='85vw'
            h="80vh"
       
        >
            <Box 
                // w="77%"
                w={{ sm: '97%', lg: '90%'}}
                h="full"
                bgColor='white' 
                borderRadius='50' 
                p={7} 
                // m={10}
                overflowY='scroll' 
            >
                <HStack justifyContent='space-between' >
                    <Text as='b' fontSize='3xl'>Projects</Text>
                    <Text as='b' fontSize='xl'>March, 2023</Text>
                </HStack>
                <HStack w='full'>
                    <HStack mt={5} spacing={5} w='80%'>
                        <ProjectIndicator icon={FaPeopleCarry}  color="twitter" indicatorText='Levantamiento' number='15' />
                        <ProjectIndicator icon={ GiThink }  color="cyan" indicatorText='Analisis' number='45' />
                        <ProjectIndicator icon={ MdOutlineDesignServices }  color="facebook" indicatorText='Diseño' number='10' />
                        <ProjectIndicator icon={ FaLaptopCode }  color="teal" indicatorText='Desarrollo' number='20' />
                        <ProjectIndicator icon={ MdOutlineCloudDone }  color="whatsapp" indicatorText='Terminado' number='20' />
                    </HStack>
                    <HStack justifyContent='flex-end' w='20%'>
                    <Icon as={ AiOutlineMenu }  fontSize='3xl'/>
                    </HStack>
                </HStack>

                <SimpleGrid columns={{ sm: 1, md: 2, xl: 3}} spacing={5} w={'full'} mt={10} alignItems='center' >
                    <GridItem  w='full' >
                    <ProjectCard 
                        projectName={'Emergencia Web'} 
                        projectStatus={'En Desarrollo'} 
                        projectProgressNumber={10} 
                        cardVariant={CardVariant.Unassigned}  
                        projectTimeLeft='4 Days left'             
                    />
                    </GridItem>
                    <GridItem  w='full' >
                    <ProjectCard 
                        projectName={'Emergencia Web'} 
                        projectStatus={'En Desarrollo'} 
                        projectProgressNumber={10} 
                        cardVariant={CardVariant.Assigned}  
                        projectTimeLeft='4 Days left'             
                    />
                    </GridItem>
                    <GridItem  w='full' >
                    <ProjectCard 
                        projectName={'Emergencia Web'} 
                        projectStatus={'En Desarrollo'} 
                        projectProgressNumber={10} 
                        cardVariant={CardVariant.Unassigned}  
                        projectTimeLeft='4 Days left'             
                    />
                    </GridItem>
            
                
                </SimpleGrid>
            </Box>
        </Flex>
        


      </Grid>
    </Container>
  </ScaleFade> 
  )
}

export default App