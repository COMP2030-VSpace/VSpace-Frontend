/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, createRef, useContext, useState } from "react";
import "./footer.scss";
import logo from "../../assets/footer/logo-vinuni-white.png.png";
import fb from "../../assets/footer/facebook-app-symbol 1.png";
import mail from "../../assets/footer/Mail.png";
import yt from "../../assets/footer/Vector.png";

// import assets
// import sample_banner from "../../assets/sample/banner/banner.png";

// import components;

const Footer = (props) => {
    return (
        <div className="footer">

            <div className="padding"></div>

            <div className="outer-wrapper">
                {/* footer for desktop */}
                <div className="footer--top desktop">
                    <div className="footer--image">
                        <img src={logo} />
                    </div>

                    <div className="footer--content">
                        <div className="wrapper">
                            <h5>VinSpace@VinUni</h5>
                            <ul>
                                <li>Vinhomes Ocean Park</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer--content">
                        <div className="wrapper">
                            <h5>VinSpace Services</h5>
                            <ul>
                                <li>Browse Collection</li>
                                <li>Search Documents</li>
                                <li>Submit Articles</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer--content">
                        <div className="wrapper">
                            <h5>About us</h5>
                            <ul>
                                <li>VinSpace Policy</li>
                                <li>Supporting DSpace</li>
                                <li>VinSpace Employment</li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* footer for mobile */}
                <div className="footer--top mobile">
                    <div className="wrapper-left">
                        <div className="footer--image">
                            <img src={logo} />
                        </div>

                        <div className="footer--content force-left">
                            <div className="wrapper no-width">
                                <h5>VinSpace@VinUni</h5>
                                <ul>
                                    <li>Vinhomes Ocean Park</li>
                                    <li>Contact us</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="wrapper-right">
                        <div className="footer--content">
                            <div className="wrapper">
                                <h5>VinSpace Services</h5>
                                <ul>
                                    <li>Browse Collection</li>
                                    <li>Search Documents</li>
                                    <li>Submit Articles</li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer--content">
                            <div className="wrapper">
                                <h5>About us</h5>
                                <ul>
                                    <li>VinSpace Policy</li>
                                    <li>Supporting DSpace</li>
                                    <li>VinSpace Employment</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer--bottom">
                    <div>
                        <p className="copyright">
                            Copyright <span>&copy;</span> 2022 VinUni. All Right Reserved.
                            Privacy Policy
                        </p>
                    </div>

                    <div className="social-links desktop">
                        <ul>
                            <li>
                                <img src={fb} width="49" />
                            </li>
                            <li>
                                <img src={yt} width="55" />
                            </li>
                            <li>
                                <img src={mail} width="50" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
