import "./navbar.scss";

import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../contexts/AuthContext";
// import { ControllerContext } from '../../contexts/ControllerContext';

// import assets
import logo from "../../assets/navbar/logo.png";
import dropdown from "../../assets/navbar/Polygon 4.png";
// import components
import NavbarSearch from "../search/navbarSearch/NavbarSearch";

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
    };

    const moveTo = (page) => {
        window.location.href = page;
    };

    return (
        <div className="navbar-container">
            <div className="navbar-top">
                <NavbarSearch></NavbarSearch>
            </div>
            <div className="navbar-body">
                <div className="left" onClick={moveToHome}>
                    <div className="wrapper">
                        <img src={logo} alt="logo"></img>
                        <div className="address">VinSpace@VinUni</div>
                    </div>
                </div>

                <div className="right">
                    <div className="wrapper">
                        <div className="item" onClick={() => moveTo("./")}>
                            Home
                        </div>

                        <div
                            className="item"
                            onClick={() => moveTo("./register")}
                        >
                            Register
                        </div>

                        <div className="item">My account</div>

                        <div className="item">Contact</div>
                    </div>
                </div>
            </div>

            <div className="navbar-footer">
                <div className="navbar-footer-content">
                    <div>
                        <span>About us</span>
                    </div>

                    <div>
                        <img src={dropdown} />
                    </div>
                </div>

                <div className="navbar-footer-content">
                    <div>
                        <span>Browse</span>
                    </div>

                    <div>
                        <img src={dropdown} />
                    </div>
                </div>

                <div className="navbar-footer-content">
                    <div>
                        <span>Resources</span>
                    </div>

                    <div>
                        <img src={dropdown} />
                    </div>
                </div>

                <div className="navbar-footer-content">
                    <div>
                        <span>Help</span>
                    </div>

                    <div>
                        <img src={dropdown} />
                    </div>
                </div>

                <div></div>
            </div>
        </div>
    );
};

export default Navbar;
