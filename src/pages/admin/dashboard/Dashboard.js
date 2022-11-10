/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './dashboard.scss';


// import components
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import SideMenu from '../../../components/sideMenu/SideMenu';

const Dashboard = (props)=>{
    return(
        <div className = 'dashboard'>
            <Navbar></Navbar>
            
            <div className='main'>
                <SideMenu></SideMenu>
            </div>

            <Footer></Footer>
        </div>
    );
}

export default Dashboard;