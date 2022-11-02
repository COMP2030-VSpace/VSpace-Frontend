/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './banner.scss';

// import assets
import sample_banner from "../../assets/sample/banner/banner.png";

// import components;

const Banner = (props)=>{
    return(
        <div className = 'banner'
            style = {{
                background: `url(${sample_banner}) no-repeat center center/cover`,
            }}
        >

            <div className="welcome">
                <span className="top">WELCOME TO</span>
                <span className="bottom">VinSpace</span>
            </div>
            
        </div>
    );
}

export default Banner;