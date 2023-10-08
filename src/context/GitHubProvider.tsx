import { CommitsResponse } from "../interfaces/commits";
import { GitHubContext } from "./githubContext"
import { FC, useState } from 'react';

interface GitCommitState {
    commits: CommitsResponse[];
}

const GitCommitStateInitialState: GitCommitState = {
    commits: []
}


interface Props {
    children: JSX.Element | JSX.Element[];
}


export const GitHubProvider: FC<Props> = ({ children }) => {

    const [ githubState, setGithubState] = useState( GitCommitStateInitialState );

    const setCommits = (commits: CommitsResponse[]) => {
        if( commits === undefined ) return;

        if( commits.every(commit => githubState.commits.includes(commit))) return;

        setGithubState({
            commits: [ ...commits, ...githubState.commits]
        })
    }


    const removeCommits = ( commits: CommitsResponse[] ) => {
        setGithubState({
            commits: githubState.commits.filter( c => !commits.includes(c))
        })
    }


    return (
        <GitHubContext.Provider  value={{
            ...githubState,


            setCommits,
            removeCommits
        }}>
            { children }
        </GitHubContext.Provider>
    )
}
