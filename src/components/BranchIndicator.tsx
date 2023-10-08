import { FC, useState } from 'react';
import { VStack, Text, Tag, TagRightIcon } from "@chakra-ui/react"
import { IconType } from 'react-icons/lib';


interface Props {
    indicatorText: string;
    icon: IconType;
}


export const BranchIndicator: FC<Props> = ({ indicatorText, icon }) => {

    const [toggleTag, setToggleTag] = useState<boolean>(false);

    const onToggleTag = () => {
        setToggleTag(!toggleTag);
    }

    return (
        <VStack spacing={0} alignItems='flex-start'>
            <Tag 
                size='md' 
                variant={ toggleTag ? "solid" : "outline"} 
                colorScheme={ toggleTag ? "gitHubColor" : "gray"} 
                shadow="sm"
                _hover={{ cursor: 'pointer' }} 
                py={2} 
                px={3} 
                border='1px'
                borderRadius={14}
                onClick={ onToggleTag }
            >
                <Text fontSize='sm' >{ indicatorText }</Text>
                <TagRightIcon as={ icon } fontSize={20}/>
            </Tag>
        </VStack>
    )
}
