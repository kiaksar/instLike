import { Avatar, Badge, Box, Button, Grid, TextField } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import React, { useState } from 'react';
function EditProfile(props) {
    const [badgeInvisible, setBadgeInvisible] = useState(true);
    const [bio, setBio] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [image, setImage] = useState();
    const [imagePrev, setImagePrev] = useState();
    return (
        <Box sx={{ p: 4 }}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Box>
                        <Button onMouseEnter={() => setBadgeInvisible(false)} onMouseLeave={() => setBadgeInvisible(true)} component="label">
                            <input hidden accept="image/*" type="file" onChange={(e) => {
                                setImage(e.target.files[0])
                                setImagePrev(URL.createObjectURL(e.target.files[0]))
                            }} />
                            <Badge invisible={badgeInvisible} overlap='circular' anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                                badgeContent={
                                    <AddAPhotoIcon />
                                }>
                                <Avatar src={imagePrev} sx={{ margin: "0 auto", width: 64, height: 64 }} />
                            </Badge>
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <TextField type="text" label="bio" />
                </Grid>
                <Grid item xs={12}>
                    <TextField type="password" label="old password" />
                </Grid>
                <Grid item xs={12}>
                    <TextField type="password" label="new password" />
                </Grid>
                <Grid item xs={12}>
                    <TextField type="password" label="confirm password" />
                </Grid>
                <Grid item xs={12}>
                    <Button variant='contained'>Edit</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default EditProfile;