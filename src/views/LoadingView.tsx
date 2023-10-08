import { Center, SimpleGrid } from "@chakra-ui/layout"
import { Spinner } from "@chakra-ui/react"

export const LoadingView = () => {
    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg:3, xl:4, '2xl':5  }} spacing={2} w={'full'} mt={10} alignItems='center' >
            <Center>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
            </Center>
        </SimpleGrid>
    )
}
