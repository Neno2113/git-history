import { createContext } from "react";
import { CommitsResponse } from "../interfaces/commits";


interface Props {
    commits: CommitsResponse[] 

    setCommits: ( commits: CommitsResponse[]) => void
    removeCommits: ( commits: CommitsResponse[] ) => void
    clearCommits: () => void
}





export const GitHubContext = createContext( {} as Props)