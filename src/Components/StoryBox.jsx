import { Avatar, CircularProgress, Grid, IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import userDefault from '../Assets/Images/userDefault.png'
import React, { useState } from 'react';
function StoryBox(props) {
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(7);
    return (
        <Grid container sx={{ padding: "10px 10px 10px 10px" }}>
            <Grid item xs={1}>
                <IconButton disabled={start === 0}
                    onClick={() => {
                        setEnd(end - 1)
                        setStart(start - 1)
                    }}>
                    <NavigateBeforeIcon />
                </IconButton>
            </Grid>
            <Grid container item xs={10} spacing={1}>
                {props.stories ? props.stories.filter((story, index) => index >= start && index <= end).map((story, index) => {
                    return (
                        <Grid item xs={1.5} key={index}>
                            <Avatar src={story}
                                sx={{ width: "16", height: "16" }} />
                        </Grid>
                    )
                }) : <CircularProgress sx={{ margin: "0 auto" }} />}
            </Grid>
            <Grid item xs={1}>
                <IconButton disabled={props.stories && end === props.stories.length - 1}
                    onClick={() => {
                        setEnd(end + 1)
                        setStart(start + 1)
                    }}>
                    <NavigateNextIcon />
                </IconButton>
            </Grid>
        </Grid>

    );
}

export default StoryBox;