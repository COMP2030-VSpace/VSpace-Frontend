import './navbar.scss';

import { useContext, useEffect, useState } from 'react';
// import { AuthContext } from "../../contexts/AuthContext";
// import { ControllerContext } from '../../contexts/ControllerContext';


// import assets
import logo from "../../assets/navbar/logo.png";


// import components
import NavbarSearch from '../search/navbarSearch/NavbarSearch';


const Navbar = (props) => {

    // const { authState: { authLoading, isAuthenticated, user }, redirectToLogin } = useContext(AuthContext);

    // const { controllerState: {
    //     displayMessage, isOpenNavbar, isOpenCreatePost,
    //     isOpenProfile, landing, displayNotification,
    //     displayGallery, isProfileSetting
    // },
    //     showMessage, showHome, showNotification,
    //     hideNotification, showGallery, hideGallery,
    //     closeNavbar, openNavbar, openCreatePost,
    //     closeCreatePost, openProfile

    // } = useContext(ControllerContext);


    // const [curHover, setCurHover] = useState(0);




    // const hover = (type) => {
    //     setCurHover(type);
    // }

    // const closeHover = () => {
    //     setCurHover(0);
    // }



    const moveToHome = () => {
        window.location.href = "/";
    }


    return (
        <div className="navbar-container">
            <div className="navbar-top">
                <NavbarSearch></NavbarSearch>
            </div>
            <div className="navbar-body">
                <div className="left" onClick={moveToHome}>
                    <div className="wrapper">
                        <img src = {logo} alt = "logo"></img>
                        <div className="address">VinSpace@VinUni</div>
                    </div>
                </div>

                <div className="right">
                    <div className="wrapper">
                        <div className="item">
                            Home
                        </div>

                        <div className="item">
                            Register
                        </div>

                        <div className="item">
                            My account
                        </div>

                        <div className="item">
                            Contact
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbar-footer">

            </div>
        </div>
    )
}


export default Navbar;
