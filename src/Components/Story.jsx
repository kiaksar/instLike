import { Box, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
function Story(props) {
    return (
        <Box>
            <Card>
                <CardMedia
                    component="img"
                    image={props.image}
                    sx={{ objectFit: "cover" }}
                    alt="This is the story image"
                />
            </Card>
        </Box>
    );
}

export default Story;