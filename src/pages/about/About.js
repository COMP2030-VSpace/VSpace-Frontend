/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './about.scss';


// import components
import Navbar from "../../components/navbar/Navbar";
import Banner from '../../components/banner/Banner';
import Footer from "../../components/footer/Footer";


const About = (props)=>{
    return(
        <div className = 'about'>
            <Navbar></Navbar>
            <Banner></Banner>

            <div className="main">
                <div className='gen-intro'>
                    {/* Tung works here */}
                </div>



                <div className='two-col'>
                    {/* Thao works here */}
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}

export default About;