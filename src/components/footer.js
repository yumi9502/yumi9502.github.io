import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { IconFont } from './Icon';

const useStyles=makeStyles({
    root:{
        backgroundColor:'#F2F2F2',
        margintop:'auto',
        textAlign:'center',
        padding:'2vh 0 4vh 0',
    },
});

const Footer=()=>{
    const classes=useStyles();
    return(
        <div className={classes.root}>
            <IconFont title="mail" className="far fa-envelope"/>
            <Typography variant="p" color="textPrimary">
                yomogi834@nifty.com<br/>
            </Typography>
            <Typography variant="p" color="textPrimary">
                Built with {``}<a href="https://www.gatsbyjs.org">Gatsby</a>
            </Typography>
        </div>
    )
}

export default Footer