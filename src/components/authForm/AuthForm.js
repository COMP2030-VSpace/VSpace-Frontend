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
                </>
            }
        </div>
    );
}

export default AuthForm;