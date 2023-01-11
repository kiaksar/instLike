import { Button, Grid, IconButton, Paper, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import defaultImage from "../Assets/Images/postDefault.png"
import PhotoCamera from '@mui/icons-material/PhotoCamera';
function AddPost(props) {
    const [imgOpacity, setImgOpacity] = useState("100%");
    const [captionText, setCaptionText] = useState("");
    const [image, setImage] = useState(null)
    const [imagePrev, setImagePrev] = useState(null);
    ////////////////////////////////////////////////
    ////////////// handle add or edit //////////////
    ////////////////////////////////////////////////

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "3vh 0" }}>
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
                                    setImage(e.target.files[0])
                                    setImagePrev(URL.createObjectURL(e.target.files[0]))
                                }} />
                                <PhotoCamera />
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid item xs={2} />
                    <Grid item xs={2} />
                    <Grid item xs={8} sx={{ padding: "10px 0" }}>
                        <TextField value={captionText} onChange={(e) => { setCaptionText(e.value) }} sx={{ width: "100%" }} rows={3} label="caption" variant='outlined' multiline />
                    </Grid>
                    <Grid item xs={2} />
                    <Grid item xs={2} />
                    <Grid item xs={8}>
                        <Button variant="contained">Submit</Button>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
            </Paper>
        </Box>
    );
}

export default AddPost;