/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './profile.scss';


// import components
import Navbar from "../../components/navbar/Navbar";
// import HomeSearch from '../../components/search/homeSearch/HomeSearch';
import Footer from '../../components/footer/Footer';

const Profile = (props)=>{
    return(
        <div className = 'register mb10'>
            <Navbar></Navbar>
            {/* <Banner></Banner> */}

            <div className="main">
    
            </div>

            <Footer></Footer>
        </div>
    );
}

export default Profile;