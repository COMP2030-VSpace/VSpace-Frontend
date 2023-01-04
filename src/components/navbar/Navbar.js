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
import Cookies from 'js-cookie';
import { userRole } from "../../enums/enum";
import { AuthContext } from "../../contexts/AuthContext";


// import components
import NavbarSearch from "../search/navbarSearch/NavbarSearch";
import NavbarFooterItem from "./NavbarFooterItem";
import Button from "../button/Button";
import HamMenu from "../mobile/dropdownHamMenu/HamMenu";
import SideMenu from "../mobile/sideMenu/SideMenu";
import HomeSearch from "../search/homeSearch/HomeSearchV2"


const Navbar = (props) => {
    const { logout } = useContext(AuthContext);
    const [isAuthenticated, setAuthenticate] = useState(false);

    const [isDisplay, setIsDisplay] = useState(false);

    const showDropdownMenu = () => {
        setIsDisplay(!isDisplay);
    };

    useEffect(() => {
        let checkLogin = (Cookies.get("role") && (Cookies.get("role")  !== userRole.USER));
        setAuthenticate(checkLogin);
    }, []);

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
                        <div className="ham-side-menu">
                            <div className="wrapper">
                                <img
                                    src={hamburgerMenu}
                                    alt="menu"
                                    onClick={() => showDropdownMenu()}
                                ></img>
                            </div>
                        </div>
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
                    <HamMenu
                        items = {[
                            {
                                "title":"About Us",
                                "link":"/about"
                            },
                            {
                                "title":"Browse",
                                "link":"/"
                            },
                            {
                                "title":"Resources",
                                "link":"/"
                            },
                            {
                                "title":"Help",
                                "link":"/"
                            },
                            {
                                "title":"Contact",
                                "link":"/"
                            }
                        ]}
                    ></HamMenu>

                    {isDisplay &&
                        <div className="side-info">
                            <div className="item mb2">
                                <HomeSearch></HomeSearch>
                            </div>

                            <div className="browse item mb2">
                                <div className="text mb1">BROWSE</div>

                                <div className="vinspace-list">
                                    <div className="heading">ALL OF VinSpace</div>

                                    <div className="browse-list">
                                        <ul>
                                            <li>Communities & Collections</li>
                                            <li>By Issue Date</li>
                                            <li>Authors</li>
                                            <li>Titles</li>
                                            <li>Subjects</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="browse item">
                                <div className="text mb1">DISCOVER</div>

                                <div className="vinspace-list mb1">
                                    <div className="heading">Author</div>

                                    <div className="browse-list">
                                        <ul>
                                            <li>Anderson, Terry (121)</li>
                                            <li>McGreal, Rory (95)</li>
                                            <li>Gismondy, Mike (82)</li>
                                            <li>Temple Norman, J (22)</li>
                                            <li>Holmberg, Robert G (35)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="vinspace-list mb1">
                                    <div className="heading">Subject</div>

                                    <div className="browse-list">
                                        <ul>
                                            <li>Holmberg, Robert G (35)</li>
                                            <li>Distance Education</li>
                                            <li>Mobile Learning</li>
                                            <li>Social Enterprise</li>
                                            <li>Research</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="vinspace-list">
                                    <div className="heading">Date Issued</div>

                                    <div className="browse-list">
                                        <ul>
                                            <li>2020 - 2022 (33)</li>
                                            <li>2010 - 2019 (19)</li>
                                            <li>2000 - 2009 (22)</li>
                                            <li>1990 - 1999 (14)</li>
                                            <li>1980 - 1989 (12)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
            </div>
        </div>
    );
};

export default Navbar;
