/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './register.scss';


// import components
import Navbar from "../../components/navbar/Navbar";
import Banner from '../../components/banner/Banner';
import AuthForm from '../../components/authForm/AuthForm';
// import HomeSearch from '../../components/search/homeSearch/HomeSearch';
import Footer from '../../components/footer/Footer';

const Register = (props)=>{
    return(
        <div className = 'register'>
            <Navbar></Navbar>
            <Banner></Banner>

            <div className="main">
                <AuthForm
                    authType = "register"
                ></AuthForm>
            </div>

            <Footer></Footer>
        </div>
    );
}

export default Register;