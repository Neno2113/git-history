import { SimpleGrid, GridItem } from "@chakra-ui/react"
import { CommitCard } from "../components"

export const HomeView = () => {
  return (
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
  )
}
