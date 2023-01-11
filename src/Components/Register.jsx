import { Button, Checkbox, FormControlLabel, Grid, Hidden, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
function Register(props) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState(dayjs(new Date().toISOString().slice(0, 10)));
    const handleDateChange = (newValue) => {
        setDateOfBirth(dayjs(newValue))
    }
    return (
        <Box sx={{ height: "100vh", display: "flex", alignItems: "center", justifwyContent: "center" }}>
            <Grid container>
                <Hidden xsDown>
                    <Grid item lg={4} md={3} xs={1}></Grid>
                </Hidden>
                <Grid item lg={4} md={6} xs={10}>
                    <Paper sx={{ padding: "2vh 2vw" }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant='h4' sx={{ textAlign: "center", fontWeight: "bold" }}>Register</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField sx={{ width: "100%" }} value={username} onChange={(e) => { setUsername(e.target.value) }} label="username" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField sx={{ width: "100%" }} value={email} onChange={(e) => { setEmail(e.target.value) }} label="email" type="email" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ width: "100%" }}>
                                            <MobileDatePicker
                                                label="Date of Birth"
                                                inputFormat='MM/DD/YYYY'
                                                value={dateOfBirth.format('MM/DD/YYYY')}
                                                onChange={handleDateChange}
                                                renderInput={(params) => <TextField {...params} />}
                                                sx={{ width: "100%" }}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField sx={{width: "100%"}} value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" label="password" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField sx={{width: "100%"}} value={confPassword} onChange={(e) => { setConfPassword(e.target.value) }} type="password" label="confirm password" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button variant='contained'>
                                            Register
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Button><Typography>Have an account? Login Now!</Typography></Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item lg={4} md={3} xs={1}></Grid>
            </Grid>
        </Box>
    );
}

export default Register;