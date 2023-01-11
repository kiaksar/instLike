import { Box, CircularProgress, Grid } from '@mui/material';
import React from 'react';
function SavedPosts(props) {
    return ( 
        <Box sx={{p: '10px'}}>
            <Grid container spacing={1} sx={{ pt: "10px" }}>
                {props.savedPosts ?
                    props.savedPosts.map((post) => {
                        return (
                            <Grid item md={4} xs={12}>
                                <img src={post.image}
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

export default SavedPosts;