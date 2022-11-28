/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './setup.scss';


// import components
import Navbar from "../../components/navbar/Navbar";
import Banner from '../../components/banner/Banner';
// import HomeSearch from '../../components/search/homeSearch/HomeSearch';
import Footer from '../../components/footer/Footer';

const Setup = (props)=>{
    const [regState, setRegState] = useState(1);

    return(
        <div className = 'register-setup mb10'>
            <Navbar></Navbar>
            {/* <Banner></Banner> */}

            {regState === 1 &&
                <div className="main">
                    {/* Tung starts here */}




















                    {/* Tung ends here */}
                </div>
            }

            <Footer></Footer>
        </div>
    );
}

export default Setup;