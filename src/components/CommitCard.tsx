import { FC} from "react"
import { dateConvertion, timeSince } from '../helpers';
import { Card, CardHeader, HStack, Text, 
    CardBody, Flex, CardFooter, Avatar, Center, Tag, TagLabel, Divider, Box } from "@chakra-ui/react"


interface Props {
    commitDate?:  string;
    commitDescription: string;
    authorAvatar?: string;
    authorEmail?: string;
    authorName?: string;
    commitTimeSince?: string;
}

export const CommitCard:FC<Props> = ({ 
    commitDate = 'april 4, 2023', 
    authorAvatar,
    commitDescription,
    authorEmail,
    authorName,
    commitTimeSince = '4 days',
    }) => {

      return (
        <Card
          borderRadius={20}
          w={320}
          boxShadow="2xl"
          variant="outline"
          bgColor="#BCC1D8"
        >
          <CardHeader pb={0} >
            <HStack>
              <Text as="b" color="gray.700" fontSize="md" fontWeight="medium">
                Commit on 
              </Text>
              <Text as='b'>
                  { dateConvertion(commitDate)}
                </Text>
            </HStack>
          </CardHeader>
          <CardBody>
            <Flex flexDirection="column" alignItems="center" w="full" height='100px'>
              <Text as="b">
                { commitDescription }
              </Text>
              <Text>{authorEmail}</Text>
            </Flex>
          </CardBody>
          <Divider />
          <CardFooter
            p={5}
            display="flex"
            justifyContent="space-between"
          
            w="full"
            py={2}
          >
            <HStack >
              <Avatar
                size='sm'
                name={ authorName }
                src={ authorAvatar }
              />
              <Box w='full'>
                <Text color='#000' as='b'>{authorName}</Text>
              </Box>
            </HStack>
          
            <Center>
              <Tag colorScheme="linkedin" borderRadius="2xl" py={2} px={3}>
                <TagLabel as="b">{timeSince(commitTimeSince)}</TagLabel>
              </Tag>
            </Center>
          </CardFooter>
        </Card>
      );
}
