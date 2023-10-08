import { useQuery } from "react-query";
import githubHistoryApi from "../api/githubHistory"
import { CommitsResponse } from "../interfaces/commits";


const getCommits = async(repo_name: string = 'git-history', sha:string):Promise<CommitsResponse[]> => {
    
    const { data } = await githubHistoryApi.get<CommitsResponse[]>(`/commits/${repo_name}/${sha}`);

    return data;

}




export const useCommits = (repo_name: string = 'git-history', sha:string ) => {

    const { isLoading, isSuccess, data, isError, refetch } = useQuery(
        ['commit', {repo_name, sha}],
        () => getCommits(repo_name, sha ),
   
    )


    return {
        isError,
        isLoading,
        isSuccess,
        data,
        refetch
    }

}