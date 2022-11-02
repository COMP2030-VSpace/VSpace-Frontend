/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './home.scss';


// import componentsa
import Navbar from "../../components/navbar/Navbar";
import Banner from '../../components/banner/Banner';

const Home = (props)=>{
    return(
        <div className = 'home'>
            <Navbar></Navbar>
            <Banner></Banner>

            <div className="main">
                <div className="left"></div>
                <div className="right"></div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
}

export default Home;