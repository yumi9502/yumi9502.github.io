import React from  "react" 
import {Typography,makeStyles,Button,Box} from '@material-ui/core'
import { Card, CardHeader,CardMedia,CardContent,CardActions } from '@material-ui/core'
import Image from "../components/image";

const useStyle=makeStyles({
    root:{
        maxWidth: 245,
        margin:'0rem auto 5rem',
    },
});

export const Create=()=>{
    const classes=useStyle();
    return(
        <div>
            <div id ="create">
            <Typography align="center" variant="h5" gutterBottom>制作物</Typography>
            </div>
            <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
                <Box width="50%" p={1}>
                <Card className={classes.root}>
                <CardHeader
                title="3D脱出"
                />
                <CardMedia>
                    <Image name="gameKunren1.PNG"/>
                </CardMedia>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        3D空間の中でゴールを探し出す
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" href="https://youtu.be/Aa73s3fizF8" target="_brank" rel="noopener">
                        動画
                    </Button>
                    <Button size="small" color="primary" href="https://github.com/youmukai/Kunren-Unity-Project1" target="_brank" rel="noopener">
                        GitHub
                    </Button>
                </CardActions>
                </Card>
                </Box>
                <Box width="50%" p={1}>
                <Card className={classes.root}>
                <CardHeader
                title="射撃学園"
                />
                <CardMedia>
                    <Image name="gameSyageki1.PNG"/>
                </CardMedia>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        フィールドでコインを集めガチャを引く
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" href="https://youtu.be/oxmlpVo4Ers" target="_brank" rel="noopener">
                        動画
                    </Button>
                    <Button size="small" color="primary" href="https://github.com/youmukai/SyagekiGakuen" target="_brank" rel="noopener">
                        GitHub
                    </Button>
                </CardActions>
                </Card>
                </Box>
            </Box>
        </div>
    )
}