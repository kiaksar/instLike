import { Button, Grid, IconButton, Paper, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import defaultImage from "../Assets/Images/postDefault.png"
import PhotoCamera from '@mui/icons-material/PhotoCamera';
function AddStory(props) {
    const [imgOpacity, setImgOpacity] = useState("100%");
    const [image, setImage] = useState(null)
    const [imagePrev, setImagePrev] = useState(null);
    return (
        //////////////////////////////////////////////////////
        // if user have active story don't let him add story//
        //////////////////////////////////////////////////////
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "3vh 0", height: "70vh" }}>
            <Paper sx={{ padding: "20px", width: "50vw" }}>
                <Grid container>
                    <Grid item xs={2} />
                    <Grid item xs={8}>
                        <Box sx={{ height: "100%", position: "relative" }} onMouseEnter={() => { setImgOpacity("30%") }} onMouseLeave={() => { setImgOpacity("100%") }}>
                            <Paper sx={{ display: "flex", justifyContent: "center", justifyItems: "center", opacity: imgOpacity, height: "100%", borderRadius: "10px" }}>
                                <img src={imagePrev === null ? defaultImage : imagePrev} style={{ borderRadius: "10px", opacity: imgOpacity, width: "100%", height: "100%", objectFit: "cover" }} onMouseEnter={() => { setImgOpacity("40%") }} onMouseLeave={() => { setImgOpacity("100%") }} />
                            </Paper>
                            <IconButton component="label" sx={{ position: "absolute", top: "45%", right: "45%" }} onMouseEnter={() => { setImgOpacity("40%") }} onMouseLeave={() => { setImgOpacity("100%") }}>
                                <input hidden accept="image/*" type="file" onChange={(e) => {
                                    setImagePrev(URL.createObjectURL(e.target.files[0]))
                                    setImage(e.target.files[0])
                                }} />
                                <PhotoCamera />
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid item xs={2} />
                    <Grid item xs={2} />
                    <Grid item xs={8} sx={{mt: 2}}>
                        <Button variant="contained">Submit</Button>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
            </Paper>
        </Box>
    );
}

export default AddStory;