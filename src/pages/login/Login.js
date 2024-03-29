/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './login.scss';


// import components
import Navbar from "../../components/navbar/Navbar";
import Banner from '../../components/banner/Banner';
import AuthForm from '../../components/authForm/AuthForm';
import Footer from '../../components/footer/Footer';


const Login = (props)=>{
    return(
        <div className = 'login'>
            <Navbar></Navbar>
            {/* <Banner></Banner> */}

            <div className="main mb10">
                <AuthForm
                    authType = "login"
                ></AuthForm>
            </div>

            <Footer></Footer>
        </div>
    );
}

export default Login;