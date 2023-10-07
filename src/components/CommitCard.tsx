import { FC} from "react"
import { Card, CardHeader, HStack, Text, 
    CardBody, Flex, CardFooter, AvatarGroup, Avatar, Center, Tag, TagLabel, Divider } from "@chakra-ui/react"



interface Props {
    projectDate?:  string;
    projectName:   string;
    projectStatus: string; 
    projectProgressNumber: number;
    projectTimeLeft?: string;
}

export const CommitCard:FC<Props> = ({ 
    projectDate = 'april 4, 2023', 
    // projectName, 
    projectStatus,  
    projectTimeLeft,
    }) => {

      return (
        <Card
          borderRadius={20}
          w={320}
          boxShadow="2xl"
          variant="outline"
          bgColor="#BCC1D8"
        >
          <CardHeader >
            <HStack justifyContent="space-between">
              <Text as="b" color="gray.700" fontSize="md" fontWeight="medium">
                {projectDate}
              </Text>
            </HStack>
          </CardHeader>
          <Divider />
          <CardBody>
            <Flex flexDirection="column" alignItems="center" w="full">
              <Text as="b">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
                numquam minima voluptatibus nisi, repudiandae quis recusandae
              </Text>
              <Text>{projectStatus}</Text>
            </Flex>
          </CardBody>
          {/* <Divider /> */}
          <CardFooter
            p={5}
            display="flex"
            justifyContent="space-between"
          
            w="full"
            py={2}
          >
            <AvatarGroup size="sm" max={2} mt={0} pt={0}>
              <Avatar
                name="Ryan Florence"
                src="https://bit.ly/ryan-florence"
              />
              <Avatar
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
              />
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
              <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
              <Avatar
                name="Christian Nwamba"
                src="https://bit.ly/code-beast"
              />
            </AvatarGroup>
            <Center>
              <Tag colorScheme="teal" borderRadius="2xl" py={2} px={3}>
                <TagLabel as="b">{projectTimeLeft}</TagLabel>
              </Tag>
            </Center>
          </CardFooter>
        </Card>
      );
}
