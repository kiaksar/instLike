import { Avatar, Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import defaultImage from "../Assets/Images/userDefault.png"
function ShowProfile(props) {
    return (
        <Box sx={{ p: "10px" }}>
            <Grid container>
                <Grid item md={3} xs={0} />
                <Grid container item md={6} xs={12}>
                    <Grid item xs={2}>
                        <Avatar src={props.userImage ? props.userImage : defaultImage}
                            sx={{ width: 64, height: 64 }} />
                    </Grid>
                    <Grid container item xs={10}>

                        <Grid item xs={6}>
                            <Typography variant='h4'>{props.userName ? props.userName : "User"}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            {props.isMe ? <Button variant='contained' onClick={() => window.location.replace("editProfile")}>Edit Profile</Button> : <Button variant='contained'>{props.isFollowed ? "Unfollow" : "Follow"}</Button>}
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={4}>
                                <Typography variant='body2'>Posts: {props.postCount ? props.postCount : "..."}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='body2'>Follower: {props.followersCount ? props.followersCount : "..."}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='body2'>Following: {props.followingCount ? props.followingCount : "..."}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={3} xs={0} />
            </Grid>
            <Grid container spacing={1} sx={{ pt: "10px" }}>
                {props.userPosts ?
                    props.userPosts.map((post) => {
                        return (
                            <Grid item md={4} xs={12}>
                                <img src={post}
                                    style={{
                                        objectFit: 'cover',
                                        width: "100%",
                                        maxHeight: "100%"
                                    }} />
                            </Grid>
                        )
                    }) : <CircularProgress sx={{margin: "0 auto"}} />
                }
            </Grid>
        </Box>
    );
}

export default ShowProfile;