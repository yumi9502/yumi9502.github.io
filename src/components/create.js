import React from  "react" 
import {Typography,makeStyles} from '@material-ui/core'

const useStyles=makeStyles({
    root:{
        color:'#fff',
    }
})

export const Create=()=>{
    const root=useStyles();
    return(
        <div>
            <Typography align="center" variant="h5" gutterBottom>制作物</Typography>
            <Typography component="p">Unity</Typography>
            <Typography component="ul">
                <li>
                KunrenUnityProject1
                    <a href="https://youtu.be/Aa73s3fizF8">動画</a>
                    <a href="https://github.com/youmukai/Kunren-Unity-Project1">github</a>
                </li>
                <li>
                射撃学園(teamUi)
                    <a href="https://youtu.be/oxmlpVo4Ers">動画</a>
                    <a href="https://github.com/youmukai/SyagekiGakuen">github</a>
                </li>
            </Typography>
        </div>
    )
}