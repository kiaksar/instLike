import { Avatar, Box, CircularProgress, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Comment from './Comment';
function ShowComments(props) {
    const [loaded, setLoaded] = useState(false)
    return (
        <Box>
            <Typography variant='h4' sx={{ml: 2}}>My Comments</Typography>
            <Grid container >
                {loaded ?
                    props.comments.map((comment) => {
                        return (
                            <Grid item xs={12}>
                                <Comment commentId={comment.id}/>
                            </Grid>
                        )
                    }) :
                    <>
                        <Grid item xs={12}>
                            <Comment />
                        </Grid>
                        <Grid item xs={12}>
                            <Comment />
                        </Grid>
                        <Grid item xs={12}>
                            <Comment />
                        </Grid>
                        <Grid item xs={12}>
                            <Comment />
                        </Grid>
                    </>
                }
            </Grid>
        </Box>
    );
}

export default ShowComments;