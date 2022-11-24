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

// import assets
import thumb from "../..//../assets/admin/thumbnail.png";
import arrow from "../..//../assets/admin/up-arrow.png";

const Dashboard = (props) => {
    return (
        <div className="dashboard">
            <Navbar></Navbar>

            <div className="main">
                {/* <div className="sidemenu-bg"></div> */}
                <SideMenu></SideMenu>

                <div className="main-right">
                    {/* Tung starts here */}
          
                    
                   
                    {/* Tung ends here */}



                    {/* Thao starts here */}
                    <div className="bottom">
                        <div className="header">
                            <h2>
                                Recent Submissions
                            </h2>
                        </div>

                        <div className="item">
                            <div className="item-content">
                                <div className="thumb">
                                    <img src= {thumb} alt="Thumbnail"/>
                                </div>

                                <div className="thumb-info">
                                    <div className="tag">
                                        <span className="tag1">datafile.listelement.badge</span>
                                        <span className="tag2">Open Access</span>
                                    </div>

                                    <div className="item-header">
                                        <h3>TITLE TOP-LEVEL TEST SAMPLE</h3>
                                    </div>

                                    <div className="item-sub">
                                        <h4>(VinSpace, 2022-11-15) Doe, John</h4>
                                    </div>

                                    <div className="item-main">
                                        <p>Este trabajo se propone elaborar un paradigma diferencial o auto-diferencial no-dualista, 
                                            respecto del cual la identidad femenina funcione como arquetipo de la existencia. 
                                            En efecto, si la identidad femenina expresa la diferencia absoluta, 
                                            lo hace por su capacidad autodiferenciante, o bien, por su energía </p>
                                    </div>

                                    <label for="text-button" className="show-button">
                                        <img src={arrow}/>
                                        <p>Show more</p>
                                    </label>
                                </div>
                            </div> 

                            <div className="item-content">
                                <div className="thumb">
                                    <img src= {thumb} alt="Thumbnail"/>
                                </div>

                                <div className="thumb-info">
                                    <div className="tag">
                                        <span className="tag1">item</span>
                                        <span className="tag2">Open Access</span>
                                    </div>

                                    <div className="item-header">
                                        <h3>TITLE TOP-LEVEL TEST SAMPLE</h3>
                                    </div>

                                    <div className="item-sub">
                                        <h4>(VinSpace, 2022-11-15) Doe, John</h4>
                                    </div>

                                    <div className="item-main">
                                        <p>Este trabajo se propone elaborar un paradigma diferencial o auto-diferencial no-dualista, 
                                            respecto del cual la identidad femenina funcione como arquetipo de la existencia. 
                                            En efecto, si la identidad femenina expresa la diferencia absoluta, 
                                            lo hace por su capacidad autodiferenciante, o bien, por su energía </p>
                                    </div>

                                    <label for="text-button" className="show-button">
                                        <img src={arrow}/>
                                        <p>Show more</p>
                                    </label>
                                </div>
                            </div> 

                            <div className="item-content">
                                <div className="thumb">
                                    <img src= {thumb} alt="Thumbnail"/>
                                </div>

                                <div className="thumb-info">
                                    <div className="tag">
                                        <span className="tag1">item</span>
                                        <span className="tag2">Open Access</span>
                                    </div>

                                    <div className="item-header">
                                        <h3>TITLE TOP-LEVEL TEST SAMPLE</h3>
                                    </div>

                                    <div className="item-sub">
                                        <h4>(VinSpace, 2022-11-15) Doe, John</h4>
                                    </div>

                                    <div className="item-main">
                                        <p>Este trabajo se propone elaborar un paradigma diferencial o auto-diferencial no-dualista, 
                                            respecto del cual la identidad femenina funcione como arquetipo de la existencia. 
                                            En efecto, si la identidad femenina expresa la diferencia absoluta, 
                                            lo hace por su capacidad autodiferenciante, o bien, por su energía </p>
                                    </div>

                                    <label for="show-button" className="show-button">
                                        <img src={arrow}/>
                                        <p>Show more</p>
                                    </label>
                                </div>
                            </div> 
                        </div>

                        <div className="load-button">
                            <span>Load more ...</span>
                        </div>
                    </div>

                    {/* Thao ends here */}
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Dashboard;
