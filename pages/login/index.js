import React, { useState } from 'react'
import { LockOutlined } from '@mui/icons-material';
import Alert from '@mui/material/Alert';
import { Paper, Grid, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@mui/material';
// import { NextResponse } from 'next/server';
import Router from 'next/router';


function Login() {
    const styles = {
        paperStyle: {
            padding: 20, width: 320, margin: '20px auto'
        },
        avatarStyle: {
            backgroundColor: '#1bbd7e'
        },
        buttonStyle: {
            marginTop: '10px auto'
        },
        inputStyles: {
            margin: '10px auto'
        },
        forgotStyles: {
            margin: '40px'
        }
    }

    const [data, setData] = useState([{ username: 'Pranav', password: 'soni123' },{ username: 'Dhruv', password: 'ch123'}]);

    const [state, setState] = useState({
        username: '', password: ''
    })

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    console.log('state', state);

    const handleSumbit = (e) => {
        e.preventDefault();
        data.map((val) => {
            if (val.username == state.username && val.password == state.password) {
                // (<Alert severity="success">Loged In Successfully!</Alert>)
                Router.push('/Todo')
                console.log('sbmitted state', state);
            }
        })
    }

    return (
        <Grid>
            <Paper elevation={10} style={styles.paperStyle}>
                <Grid align='center'>
                    <Avatar style={styles.avatarStyle}><LockOutlined /></Avatar>
                    <h2>Sign In</h2>
                    <form action='/signup'>
                        <TextField
                            name="username"
                            onChange={handleChange}
                            value={state.username}
                            label='Username'
                            placeholder='Enter Username'
                            style={styles.inputStyles}
                            fullWidth
                        />
                        <TextField
                            name="password"
                            onChange={handleChange}
                            value={state.password}
                            label='Password'
                            placeholder='Enter Password'
                            type='password'
                            style={styles.inputStyles}
                            fullWidth
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Remember Me"
                            style={styles.inputStyles}
                        />

                        <Button onClick={handleSumbit} type='submit' color='primary' variant='contained' style={styles.buttonStyle} fullWidth> Sign In</Button>
                    </form>
                    {/* <Button onClick={handleClick} type='submit' color='primary' variant='contained' style={styles.buttonStyle} fullWidth> Git Hub </Button> */}

                    <Typography style={styles.forgotStyles}>
                        <Link href="#">
                            Forgot Password?
                        </Link>
                    </Typography>
                    <Typography style={styles.inputStyles}>
                        New to this site?
                        <Link href="/signup">
                            Sign Up
                        </Link>

                    </Typography>

                </Grid>
            </Paper>
        </Grid>
    )
}

export default Login;