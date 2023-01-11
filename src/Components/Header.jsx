import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircle from '@mui/icons-material/AccountCircle';
import React, { useState } from 'react';
function Header(props) {
    const [open, setOpen] = useState(null)
    return (
        <AppBar sx={{ flexGrow: 1 }}>
            <Toolbar disableGutters>
                <Typography variant='h4' component="div" sx={{ flexGrow: 1, pl: 2 }} onClick={() => window.location.replace("/")}>Instagram</Typography>
                {props.isLoggedIn ?
                    <>
                        <IconButton color='inherit' size="large" onClick={(event) => setOpen(event.currentTarget)}>
                            <AccountCircle />
                        </IconButton>
                        <Menu anchorEl={open}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(open)}
                            onClose={() => setOpen(null)}>
                            <MenuItem onClick={() => window.location.replace("Profile")}>My Profile</MenuItem>
                            <MenuItem onClick={() => window.location.replace("addPost")}>Add Post</MenuItem>
                            <MenuItem onClick={() => window.location.replace("addStory")}>Add Story</MenuItem>
                            <MenuItem onClick={() => window.location.replace("savedPosts")}>Saved Posts</MenuItem>
                            <MenuItem onClick={() => window.location.replace("myComments")}>My Comments</MenuItem>
                            <MenuItem onClick={() => window.location.replace("editProfile")}>Edit Profile</MenuItem>
                        </Menu>
                    </> :
                    <IconButton color='inherit' size="large" sx={{pr: 2}} onClick={() => window.location.replace("/login")}><LoginIcon /></IconButton>}
            </Toolbar>
        </AppBar>
    );
}

export default Header;