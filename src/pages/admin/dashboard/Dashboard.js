/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, createRef, useContext, useState } from "react";
import "./dashboard.scss";
// import { Container } from "reactstrap";

// import components
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import SideMenu from "../../../components/sideMenu/SideMenu";
import Banner from "../../../components/banner/Banner";



// import assets
import thumb from "../..//../assets/admin/thumbnail.png";
import arrow from "../..//../assets/admin/up-arrow.png";
import search from "../../../assets/admin/search-admin.png";
import pagination_arrow from "../../../assets/admin/arrow-admin.png"


const Dashboard = (props) => {
    return (
        <div className="dashboard">
            <Navbar></Navbar>

            {/* <Banner></Banner> */}

            <div className="main">
                {/* <div className="sidemenu-bg"></div> */}
                <SideMenu></SideMenu>

                <div className="main-right">
                    {/* Tung starts here */}
                    
                    <div className="customized-banner">
                        <Banner></Banner>
                    </div>

                    <div className="wrapper">                        
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
                            <h2 className="text__header">Community in DSpace</h2>
                            <h3 className="text__secondheader">Select a community to browse its collections.</h3>
                            <p className="header__ul">Now showing 1 - 5 of 547</p>
                            <ul>
                                <li>000_Vectino Natalia</li>
                                <li>000AgusGuarez</li>
                                <li>000AliciaAM</li>
                                <li>000_Vectino Natalia</li>
                                <li>000AgusGuarez</li>
                                <li>000AliciaAM</li>
                            </ul>
                        </div>

                        <div className="blocklist">
                            <div className="block" style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>
                                <img src={pagination_arrow} alt="" />
                            </div>
                            <div className="block">1</div>
                            <div className="block active">2</div>
                            <div className="block">3</div>
                            <div className="block">4</div>
                            <div className="block">5</div>
                            <div className="block">6</div>
                            <div className="block">7</div>
                            <div className="block">8</div>
                            <div className="block">9</div>
                            <div className="block">...</div>
                            <div className="block" style={{ borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}>20</div>
                        </div>
                    </div>
                    {/* Tung ends here */}









                    {/* Thao starts here */}
                    <div className="wrapper">
                        <div className="bottom">
                            <div className="header">
                                <h2 className="text__header">Community in DSpace</h2>
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
                    </div>

                    {/* Thao ends here */}
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Dashboard;
