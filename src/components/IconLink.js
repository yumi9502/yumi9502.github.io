import React from 'react';
import {IconButton,Tooltip} from '@material-ui/core';
import Octicon, { MarkGithub } from "@githubprimer/octicons-react"

export const IconLink=({title,url})=>{
    return(
        <Tooltip title={title} aria-label={title}>
            <IconButton aria-label={title} href={url} target="_brank" rel="noopener">
            <Octicon icon={MarkGithub} size='medium'/>
            </IconButton>
        </Tooltip>
    )
}