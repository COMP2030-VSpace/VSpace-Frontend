/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, createRef, useContext, useState } from "react";
import "./dashboard.scss";
// import { Container } from "reactstrap";

// import components
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import SideMenu from "../../../components/sideMenu/SideMenu";
import Banner from "../../../components/banner/Banner";

import search from "../../../assets/admin/search-admin.png";

const Dashboard = (props) => {
    return (
        <div className="dashboard">
            <Navbar></Navbar>

            <div className="main">
                <div className="sidemenu-bg"></div>
                <SideMenu></SideMenu>

                <div className="main-right">
                    {/* Tung starts here */}
                    <Banner></Banner>

                    <div className="search">
                        
                            <input
                                type="text"
                                placeholder="Search the repository"
                                className="searchbar"
                            />
                        <div className="button">
                            <img
                                src={search}
                                alt=""
                                className="searchimage"
                                style={{ width: "37px", height: "37px" }}
                            />
                            <span style={{ color: "white" }}>Search</span>
                        </div>
                    </div>
                    
                    <div className="text">
                        <h2>Community in DSpace</h2>
                        <h3>Select a community to browse its collections.</h3>
                        <span>Now showing 1 - 5 of 547</span>
                        <ul>
                            <li>000_Vectino Natalia</li>
                            <li>000AgusGuarez</li>
                            <li>000AliciaAM</li>
                            <li>000_Vectino Natalia</li>
                            <li>000AgusGuarez</li>
                            <li>000AliciaAM</li>
                        </ul>
                    </div>

                    <div className="text">
                        <h2>Community in DSpace</h2>
                        <h3>Select a community to browse its collections.</h3>
                        <span>Now showing 1 - 5 of 547</span>
                        <ul>
                            <li>000_Vectino Natalia</li>
                            <li>000AgusGuarez</li>
                            <li>000AliciaAM</li>
                            <li>000_Vectino Natalia</li>
                            <li>000AgusGuarez</li>
                            <li>000AliciaAM</li>
                        </ul>
                    </div>

                    <div className="text">
                        <h2>Community in DSpace</h2>
                        <h3>Select a community to browse its collections.</h3>
                        <span>Now showing 1 - 5 of 547</span>
                        <ul>
                            <li>000_Vectino Natalia</li>
                            <li>000AgusGuarez</li>
                            <li>000AliciaAM</li>
                            <li>000_Vectino Natalia</li>
                            <li>000AgusGuarez</li>
                            <li>000AliciaAM</li>
                        </ul>
                    </div>

                    <div className="text">
                        <h2>Community in DSpace</h2>
                        <h3>Select a community to browse its collections.</h3>
                        <span>Now showing 1 - 5 of 547</span>
                        <ul>
                            <li>000_Vectino Natalia</li>
                            <li>000AgusGuarez</li>
                            <li>000AliciaAM</li>
                            <li>000_Vectino Natalia</li>
                            <li>000AgusGuarez</li>
                            <li>000AliciaAM</li>
                        </ul>
                    </div>

                    <div className="text">
                        <h2>Community in DSpace</h2>
                        <h3>Select a community to browse its collections.</h3>
                        <span>Now showing 1 - 5 of 547</span>
                        <ul>
                            <li>000_Vectino Natalia</li>
                            <li>000AgusGuarez</li>
                            <li>000AliciaAM</li>
                            <li>000_Vectino Natalia</li>
                            <li>000AgusGuarez</li>
                            <li>000AliciaAM</li>
                        </ul>
                    </div>

                    <div className="text">
                        <h2>Community in DSpace</h2>
                        <h3>Select a community to browse its collections.</h3>
                        <span>Now showing 1 - 5 of 547</span>
                        <ul>
                            <li>000_Vectino Natalia</li>
                            <li>000AgusGuarez</li>
                            <li>000AliciaAM</li>
                            <li>000_Vectino Natalia</li>
                            <li>000AgusGuarez</li>
                            <li>000AliciaAM</li>
                        </ul>
                    </div>

                    <div className="text">
                        <h2>Community in DSpace</h2>
                        <h3>Select a community to browse its collections.</h3>
                        <span>Now showing 1 - 5 of 547</span>
                        <ul>
                            <li>000_Vectino Natalia</li>
                            <li>000AgusGuarez</li>
                            <li>000AliciaAM</li>
                            <li>000_Vectino Natalia</li>
                            <li>000AgusGuarez</li>
                            <li>000AliciaAM</li>
                        </ul>
                    </div>

                    {/* Tung ends here */}
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Dashboard;
