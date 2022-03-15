import React from 'react'
import { AddCircle, AddCircleOutline } from '@mui/icons-material'
import { Avatar, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Link, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { FormHelperText } from '@mui/material'
import * as Yup from 'yup'

const initialValues={
    name:'',
    email:'',
    gender:'',
    phoneNumber:'',
    password:'',
    confirmPassword:'',
    termsAndConditions:false
}

const validationSchema = Yup.object().shape({
    name: Yup.string().min(3,"Too Short").required('Required!'),
    email: Yup.string().email("Enter valid email").required('Required!'),
    gender: Yup.string().oneOf(["male","female"],"Required!").required('Required!'),
    phoneNumber: Yup.number().typeError('Enter valid phone Number').required('Required'),
    password: Yup.string().min(8,'Password minimum length should be 8').required('Required!'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')],"Password not matched").required('Required!'),
    termsAndConditions: Yup.string().oneOf(["true"],"Acept terms & conditions")

})

const onSubmit=(values,props) => {
    console.log(values);
}

function Signup() {
    const styles = {
        paperStyles: {
            padding: '30px 20px', width: 400, margin: '20px auto'
        },
        headerStyle: {
            margin: '5px'
        },
        avatarStyles: {
            backgroundColor: '#1bbd7e'
        },
        formSpacing: {
            margin: '5px'
        },
        marginTop: {
            marginTop: 5
        }
    }

    return (
        <Grid>
            <Paper elevation={20} style={styles.paperStyles}>
                <Grid align='center'>
                    <Avatar style={styles.avatarStyles}>
                        <AddCircleOutline />
                    </Avatar>
                    <h2 style={styles.headerStyle}>Sign Up</h2>
                    <Typography variant='caption'>
                        Please fill this form to create an account
                    </Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
                            <Field as={TextField}
                                name="name"
                                label='Name'
                                placeholder='Enter Your Name'
                                style={styles.formSpacing}
                                helperText={<ErrorMessage name="name" />}
                                fullWidth
                            />
                            <Field as={TextField}
                                name="email"
                                label='Email'
                                helperText={<ErrorMessage name="email"/>}
                                placeholder='Enter Email'
                                style={styles.formSpacing}
                                fullWidth
                            />
                            <FormControl style={styles.marginTop}>
                                <FormLabel component="legend">Gender</FormLabel>
                                <Field as={RadioGroup}
                                    aria-label="gender"
                                    defaultValue="female"
                                    name="gender"
                                    style={{ display: 'initial' }}
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </Field>
                            </FormControl>
                            <FormHelperText><ErrorMessage name="gender"/></FormHelperText>
                            <Field as={TextField} name="phoneNumber" label='Phone Number' helperText={<ErrorMessage name="phoneNumber"/>} placeholder='Enter Phone Number' style={styles.formSpacing} fullWidth />
                            <Field as={TextField} name="password" type='password' label='Password' helperText={<ErrorMessage name="password"/>} style={styles.formSpacing} fullWidth />
                            <Field as={TextField} name="confirmPassword" type='password' label='Confirm Password' helperText={<ErrorMessage name="confirmPassword"/>} style={styles.formSpacing} fullWidth />
                            <FormGroup>
                                <FormControlLabel 
                                    control={<Field as={Checkbox} name="termsAndConditions" />} 
                                    label="I accept the terms and conditions" 
                                />
                            </FormGroup>
                            <FormHelperText><ErrorMessage name="termsAndConditions"/></FormHelperText>
                            <Button type="submit" variant="contained" color='primary' style={styles.formSpacing} fullWidth>Sign Up</Button>
                        </Form>
                    )}
                </Formik>
                <Typography style={styles.marginTop}>
                    Already Have an account?
                    <Link href="/login">  
                        Log In
                    </Link>
                        
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Signup;