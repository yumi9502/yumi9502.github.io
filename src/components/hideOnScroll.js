import React from 'react';
import { Slide, useScrollTrigger } from '@material-ui/core';

export const HideOnScroll=({children,window})=>{
    const trigger=useScrollTrigger({target: window ? window() : undefined})
    return(
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}
