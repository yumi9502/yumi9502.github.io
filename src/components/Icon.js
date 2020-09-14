import React from 'react';
import {IconButton,Icon,Tooltip} from '@material-ui/core';

export const IconFont=({title,className})=>(
    <Tooltip title={title} aria-label={title}>
        <IconButton aria-label={title}>
            <Icon className={className}/>
        </IconButton>
    </Tooltip>
)