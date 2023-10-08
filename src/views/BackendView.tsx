import { SimpleGrid, GridItem, Divider, Wrap, Spinner } from "@chakra-ui/react"
import { BranchIndicator, CommitCard } from "../components"
import { useContext, useEffect } from 'react';
import { GitHubContext } from "../context/githubContext";
import { useBranches } from "../hooks";
import { FaCodeBranch } from "react-icons/fa";

export const BackendView = () => {

    const { commits, clearCommits } = useContext(GitHubContext);
    const { data, isSuccess, isLoading } = useBranches('git-history-backend');

    useEffect(() => {
        clearCommits();
    }, []);

    if( isLoading )
        return (
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        )
    

    return (
        <>
            <Divider border='1px' borderColor='black' />
            <Wrap mt={5}  spacing='10px' align='center' justify='center'>
            {
                (isSuccess ) &&
                data?.map( branch => (
                    <div  key={branch.name}  >
                    <BranchIndicator 
                        icon={FaCodeBranch}  
                        indicatorText={branch.name} 
                        repo_name="git-history-backend"
                        commit={ branch.commit.sha }
                    />
                    </div>
                ))
            }
            </Wrap>
            <SimpleGrid columns={{ sm: 1, md: 2, lg:3, xl:4, '2xl':5  }} spacing={2} w={'full'} mt={10} alignItems='center' >
                {
                    commits.map( (commit, index) => (
                        <GridItem  key={ index }  >
                            <CommitCard 
                                commitDescription={ commit.commit.message} 
                                commitDate={ commit.commit.committer.date }
                                commitTimeSince={ commit.commit.committer.date }
                                authorAvatar={ commit.author.avatar_url }
                                authorEmail={ commit.commit.author.email}
                                authorName={ commit.commit.author.name}
                                // commitTimeSince='4 Days left'             
                            />
                        </GridItem>
                    ))
                }
            </SimpleGrid>
        </>
    )
}
