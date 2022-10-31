/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './home.scss';

const Home = (props)=>{
    return(
        <div className = 'home'>
            {/* <Navbar></Navbar>
            
            <Footer></Footer> */}
            <h1>Welcome to VSPACE</h1>
        </div>
    );
}

export default Home;