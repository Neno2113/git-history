import { useQuery } from "react-query";
import githubHistoryApi from "../api/githubHistory"
import { BranchesResponse } from "../interfaces/branches"



export const getBranches = async():Promise<BranchesResponse[]> => {

    const { data } = await githubHistoryApi.get<BranchesResponse[]>(`/git-history`);
    
    return data;
}



export const useBranches = () => {


    const { data, isLoading, isError, isSuccess } = useQuery(
        ['branches'],
        getBranches
    );

    return {
        data,
        isLoading, 
        isError, 
        isSuccess
    }
}


