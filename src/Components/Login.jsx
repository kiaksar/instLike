import { Button, Checkbox, FormControlLabel, Grid, Hidden, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Post from './Post';
function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <Box sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Grid container>
                <Hidden xsDown>
                    <Grid item lg={4} md={3} xs={1}></Grid>
                </Hidden>
                <Grid item lg={4} md={6} xs={10}>
                    <Paper sx={{ padding: "2vh 2vw" }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant='h4' sx={{ textAlign: "center", fontWeight: "bold" }}>Login</Typography>
                            </Grid>
                            <Grid container item xs={12} spacing={1}>
                                <Grid item xs={12}>
                                    <TextField value={username} onChange={(e) => { setUsername(e.target.value) }} label="username" sx={{width: "100%"}}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" label="password" sx={{width: "100%"}}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant='contained'>
                                        Login
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Button onClick={() => window.location.replace("/register")}><Typography>Create an account Now!</Typography></Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item lg={4} md={3} xs={1}></Grid>
            </Grid>
        </Box>
    );
}

export default Login;