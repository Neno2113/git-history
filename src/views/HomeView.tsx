import { SimpleGrid, GridItem } from "@chakra-ui/react"
import { CommitCard } from "../components"
import { useContext } from 'react';
import { GitHubContext } from "../context/githubContext";

export const HomeView = () => {

    const { commits } = useContext(GitHubContext);

    return (
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
    )
}
