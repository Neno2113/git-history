import { FC, useContext, useEffect, useState } from 'react';
import { VStack, Text, Tag, TagRightIcon } from "@chakra-ui/react"
import { IconType } from 'react-icons/lib';
import { useCommits } from '../hooks/useCommits';
import { useQueryClient } from 'react-query';
import { GitHubContext } from '../context/githubContext';


interface Props {
    indicatorText: string;
    icon: IconType;
    commit: string;
    name?: string
}


export const BranchIndicator: FC<Props> = ({ indicatorText, icon, commit }) => {

    const queryClient = useQueryClient();
    const { setCommits, removeCommits } = useContext( GitHubContext );
    const [ selectedBranch, setSelectedBranch ] = useState("")
    const [ toggleTag, setToggleTag ] = useState<boolean>(false);
    const { data, isSuccess } = useCommits('git-history',  selectedBranch);

    useEffect(() => {
        setCommits( data! );
    }, [isSuccess ])
    


    const onToggleTag = async() => {
        
        if( toggleTag ) {
            setSelectedBranch("")  
            onRemoveCacheData()      
            removeCommits(data!);
            setToggleTag(false);
            return
        }
        setSelectedBranch(commit);
        
        setToggleTag(true);

        
    }

    const onRemoveCacheData = () => {
        queryClient.invalidateQueries( commit )
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
