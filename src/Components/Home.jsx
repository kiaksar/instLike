import { Padding } from '@mui/icons-material';
import { Avatar, CircularProgress, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Post from './Post';
import StoryBox from './StoryBox';
import defaultImage from "../Assets/Images/postDefault.png";
function Home(props) {
    const [recentPosts, setRecentPosts] = useState([])
    const [testImg, setTestImg] = useState(["https://www.pcfix.lt/wp-content/uploads/2019/10/default-user-image.png",
        "https://www.pcfix.lt/wp-content/uploads/2019/10/default-user-image.png",
        "https://www.pcfix.lt/wp-content/uploads/2019/10/default-user-image.png",
        "https://www.pcfix.lt/wp-content/uploads/2019/10/default-user-image.png",
        "https://www.pcfix.lt/wp-content/uploads/2019/10/default-user-image.png",
        "https://www.pcfix.lt/wp-content/uploads/2019/10/default-user-image.png",
        "https://www.pcfix.lt/wp-content/uploads/2019/10/default-user-image.png",
        "https://www.pcfix.lt/wp-content/uploads/2019/10/default-user-image.png",
        "https://img.freepik.com/free-icon/user_318-790139.jpg?w=2000",
        "https://img.freepik.com/free-icon/user_318-790139.jpg?w=2000",
        "https://img.freepik.com/free-icon/user_318-790139.jpg?w=2000",
        "https://www.pcfix.lt/wp-content/uploads/2019/10/default-user-image.png",
        "https://www.pcfix.lt/wp-content/uploads/2019/10/default-user-image.png",
        "https://www.pcfix.lt/wp-content/uploads/2019/10/default-user-image.png",
        "https://www.pcfix.lt/wp-content/uploads/2019/10/default-user-image.png",
        "https://www.pcfix.lt/wp-content/uploads/2019/10/default-user-image.png"]);
    const [testPostImg, setTestPostImg] = useState([defaultImage, defaultImage, defaultImage, defaultImage])
    return (
        <Box sx={{ padding: "10px" }}>
            <Grid container>
                <Grid item xs={2} />
                <Grid item xs={8}>
                    <Grid container spacing={1}>
                        <Grid item xs={8}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Paper>
                                        <Grid container>
                                            <StoryBox stories={testImg} />
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <Grid container item xs={12}>
                                    {testPostImg ?
                                        testPostImg.map((post, index) => {
                                            return (
                                                <Grid item xs={12} key={index}>
                                                    <Post image={defaultImage} caption={"This is a test caption"} isLiked={true} isSaved={false} />
                                                </Grid>
                                            )
                                        }) :
                                        < CircularProgress sx={{ margin: "0 auto" }} />
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2} />
            </Grid>
        </Box>
    );
}

export default Home;