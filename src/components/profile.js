import React from  "react" 
import {Typography,makeStyles} from '@material-ui/core'

const useStyle=makeStyles({
    root:{
        alignContent:'center',
    }
});

export const Profile=()=>{
    const classes=useStyle();
    return(
        <div className={classes.root}>
            <div id ="profile">
                <Typography align="center" variant="h5" gutterBottom>プロフィール</Typography>
            </div>
                <Typography component="p">
                    向井と申します。Unityでゲーム開発をしたりイラストを描いたりしています。<br />
                   プログラミングは数年前から独学で学んできており現在も勉強中です。
                </Typography>
        </div>
    )
}