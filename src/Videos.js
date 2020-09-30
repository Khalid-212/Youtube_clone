import React from 'react'
import {Card, CardContent, Typography} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function Videos() {
    return (
        <div className="videos">
        <Card>
            <CardContent className="video__card">
                <PlayArrowIcon/>
                <Typography>
                    The Ultimate React js Challenge
                </Typography>
            </CardContent>
        </Card>
        </div>
        
        
    )
}

export default Videos
