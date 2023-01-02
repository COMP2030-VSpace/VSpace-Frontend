import "./navbar.scss";

import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../contexts/AuthContext";
// import { ControllerContext } from '../../contexts/ControllerContext';

// import assets
import logo from "../../assets/navbar/logo.png";
import dropdown from "../../assets/navbar/Polygon 4.png";
import hamburgerMenu from "../../assets/navbar/hamburger-menu.png"

// import functions
import { moveTo } from "../../utils/helperFunctions";

// import components
import NavbarSearch from "../search/navbarSearch/NavbarSearch";
import NavbarFooterItem from "./NavbarFooterItem";
import Button from "../button/Button";
import Cookies from 'js-cookie';
import { userRole } from "../../enums/enum";
import { AuthContext } from "../../contexts/AuthContext";


const Navbar = (props) => {
    let isAuthenticated = (Cookies.get("role")  !== userRole.USER);
    const { logout } = useContext(AuthContext);

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
                    {!isAuthenticated &&
                        <div className="wrapper desktop">
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
                    }

                    {isAuthenticated &&
                        <div className="wrapper desktop">
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

                                    content = "Logout"

                                    handleClick = {() => logout()}
                                ></Button>
                            </div>
                        </div>
                    }

                    <div className="wrapper mobile">
                        <div className="ham-menu">
                            <img src={hamburgerMenu} alt = "menu"></img>
                        </div>

                        
                        {/* Tung starts here */}



                        {/* Tung ends here */}


                    </div>
                </div>
            </div>

            <div className="navbar-footer desktop">
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


            <div className="navbar-footer mobile">
                <div className="ham-menu">
                    <img src={hamburgerMenu} alt = "menu"></img>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
