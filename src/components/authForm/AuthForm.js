/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './authForm.scss';

// import assets
// import sample_banner from "../../assets/sample/banner/banner.png";

// import components;
import Button from '../button/Button';

const AuthForm = (props)=>{
    return(
        <div className = 'auth-form'>
            {props.authType === "register" &&
                <>
                    <div className='header'>
                        Setup your account
                    </div>

                    <div className='form-input'>
                        <input type = "text" placeholder='Full Name'></input>
                    </div>

                    <div className='form-input'>
                        <input type = "text" placeholder='Email Address'></input>
                    </div>

                    <div className='form-input'>
                        <input type = "password" placeholder='Password'></input>
                    </div>

                    <div className='form-input'>
                        <input type = "password" placeholder='Confirm Password'></input>
                    </div>

                    <Button 
                        styles = {{
                            "height": "2.6rem",
                            "width": "27rem",
                            "background": "#2D5288",
                            "margin-right": "0",
                            "color": "#ffffff"
                        }}

                        content = "Create Account"
                    ></Button>
                    
                    <div className= 'auth-help'>
                        <div className='login item'>
                            Already have an account? <a href='/login'>Login here!</a>
                        </div>  
                    </div>
                </>
            }


            {props.authType === "login" &&
                <>
                    <div className='header'>
                        Login your account
                    </div>

                    <div className='form-input'>
                        <input type = "text" placeholder='Email Address'></input>
                    </div>

                    <div className='form-input'>
                        <input type = "password" placeholder='Password'></input>
                    </div>

                    <Button 
                        styles = {{
                            "height": "2.6rem",
                            "width": "27rem",
                            "background": "#2D5288",
                            "margin-right": "0",
                            "color": "#ffffff"
                        }}

                        content = "Login your account"
                    ></Button>

                    <div className= 'auth-help'>
                        <div className='forgot-password item'>
                            Forgot your password?
                        </div>    
                        <div className='create-account item'>
                            Do not have an account? <a href='/register'>Create your account here!</a>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default AuthForm;