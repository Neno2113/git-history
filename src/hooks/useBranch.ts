import { useQuery } from "react-query";
import githubHistoryApi from "../api/githubHistory"
import { BranchesResponse } from "../interfaces/branches"



export const getBranches = async( repo_name: string ):Promise<BranchesResponse[]> => {

    const { data } = await githubHistoryApi.get<BranchesResponse[]>(`/${repo_name}`);
    
    return data;
}



export const useBranches = ( repo_name: string ) => {


    const { data, isLoading, isError, isSuccess } = useQuery(
        ['branches'],
        () => getBranches(repo_name)
    );

    return {
        data,
        isLoading, 
        isError, 
        isSuccess
    }
}


