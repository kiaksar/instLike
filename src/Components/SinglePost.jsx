import { Grid } from '@mui/material';
import React, { useState } from 'react';
import Post from './Post';
function SinglePost(props) {
    const [image, setImage] = useState();
    const [caption, setCaption] = useState();
    const [isLiked, setIsLiked] = useState();
    const [isSaved, setIsSaved] = useState();
    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} md={6} sx={{pt: 5}}>
                <Post image={image} caption={caption} isLiked={isLiked} isSaved={isSaved} />
            </Grid>
        </Grid>
    );
}

export default SinglePost;