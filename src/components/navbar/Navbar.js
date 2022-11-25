import "./navbar.scss";

import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../contexts/AuthContext";
// import { ControllerContext } from '../../contexts/ControllerContext';

// import assets
import logo from "../../assets/navbar/logo.png";
import dropdown from "../../assets/navbar/Polygon 4.png";

// import functions
import { moveTo } from "../../utils/helperFunctions";

// import components
import NavbarSearch from "../search/navbarSearch/NavbarSearch";
import NavbarFooterItem from "./NavbarFooterItem";
import Button from "../button/Button";

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



    return (
        <div className="navbar-container">
            <div className="navbar-top">
                <NavbarSearch></NavbarSearch>
            </div>
            <div className="navbar-body">
                <div className="left" onClick={() => moveTo("/")}>
                    <div className="wrapper">
                        <img src={logo} alt="logo"></img>
                        <div className="address">VinSpace@VinUni</div>
                    </div>
                </div>

                <div className="right">
                    <div className="wrapper">
                        {/* <div className="item" onClick={() => moveTo("/")}>
                            Home
                        </div>

                        <div
                            className="item"
                            onClick={() => moveTo("/register")}
                        >
                            Register
                        </div>

                        <div className="item">My account</div>

                        <div className="item">Contact</div> */}

                        <div>
                            <Button 
                                styles = {{
                                    "height": "2.6rem",
                                    // "width": "3rem",
                                    "background": " #CD3C3F",
                                    "margin-right": "0",
                                    "margin-bottom": "0",
                                    "color": "#ffffff",
                                    "padding": "0.05rem 1.2rem",
                                    "margin": "0"
                                }}

                                content = "Register"

                                handleClick = {() => moveTo("/register")}
                            ></Button>
                        </div>

                        <div className="ml2">
                            <Button 
                                styles = {{
                                    "height": "2.6rem",
                                    // "width": "90%",
                                    "background": " #CD3C3F",
                                    "margin-right": "0",
                                    "margin-bottom": "0",
                                    "color": "#ffffff",
                                    "padding": "0.05rem 1.5rem",
                                    "margin": "0"
                                }}

                                content = "Login"

                                handleClick = {() => moveTo("/login")}
                            ></Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbar-footer">
                <NavbarFooterItem
                    content = "About us"
                    items = {[
                        {
                            "title":"About Vinuni Library",
                            "link":"/about"
                        },
                        {
                            "title":"About Vinuni Library",
                            "link":"/about"
                        },
                        {
                            "title":"About Vinuni Library",
                            "link":"/about"
                        }
                    ]}
                ></NavbarFooterItem>

                <NavbarFooterItem
                    content = "Browse"
                    items = {[
                        {
                            "title":"About Vinuni Library",
                            "link":"/about"
                        },
                        {
                            "title":"About Vinuni Library",
                            "link":"/about"
                        },
                        {
                            "title":"About Vinuni Library",
                            "link":"/about"
                        }
                    ]}
                ></NavbarFooterItem>

                <NavbarFooterItem
                    content = "Resources"
                    items = {[
                        {
                            "title":"About Vinuni Library",
                            "link":"/about"
                        },
                        {
                            "title":"About Vinuni Library",
                            "link":"/about"
                        },
                        {
                            "title":"About Vinuni Library",
                            "link":"/about"
                        }
                    ]}
                ></NavbarFooterItem>

                <NavbarFooterItem
                    content = "Help"
                    items = {[
                        {
                            "title":"About Vinuni Library",
                            "link":"/about"
                        },
                        {
                            "title":"About Vinuni Library",
                            "link":"/about"
                        },
                        {
                            "title":"About Vinuni Library",
                            "link":"/about"
                        }
                    ]}
                ></NavbarFooterItem>


                <NavbarFooterItem
                    content = "Contact"
                    items = {[
                        {
                            "title":"About Vinuni Library",
                            "link":"/about"
                        },
                        {
                            "title":"About Vinuni Library",
                            "link":"/about"
                        },
                        {
                            "title":"About Vinuni Library",
                            "link":"/about"
                        }
                    ]}
                ></NavbarFooterItem>

                {/* <div></div> */}
            </div>
        </div>
    );
};

export default Navbar;
