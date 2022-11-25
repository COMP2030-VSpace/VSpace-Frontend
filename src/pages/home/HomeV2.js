/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, createRef, useContext, useState } from "react";
import "./homeV2.scss";

// import components
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import HomeSearch from "../../components/search/homeSearch/HomeSearchV2";
import Footer from "../../components/footer/Footer";
import Item from "../../components/item/Item";

const HomeV2 = (props) => {
    return (
        <div className="home">
            <div className="pageContentWrapper">
                <Navbar></Navbar>

                <div className="main">
                    <div className="left">
                        <div className="about item">
                            <div className="heading">
                                <h1>VinSpace</h1>
                            </div>

                            <div className="info">
                                AUSpace is Athabasca University's institutional repository (IR). It is a digital service that collects, preserves, and distributes digital material. The collections and content in AUSpace can be browsed and searched. If you have any questions, please email auspace@athabascau.ca.
                            </div>
                        </div>


                        <div className="community-list item">
                            <div className="heading">
                                <h1>Communities in VinSpace</h1>
                            </div>

                            <div className="list">
                                <div className="list-heading">
                                    Select a community to browse its collections.
                                </div>
                                <div className="list-main">
                                    <ul>
                                        <li>Athabasca River Basin Research Institute (ARBRI)</li>
                                        <li>Athabasca River Basin Research Institute (ARBRI)</li>
                                        <li>Athabasca River Basin Research Institute (ARBRI)</li>
                                        <li>Athabasca River Basin Research Institute (ARBRI)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="recent-add item">
                            <div className="heading">
                                <h1>Recently Added</h1>
                            </div>

                            <div className="item-list">
                                <Item></Item>

                                <Item></Item>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="item mb2">
                            <HomeSearch></HomeSearch>
                        </div>

                        <div className="browse item">
                            <div className="text mb1">BROWSE</div> 

                            <div className="vinspace-list">
                                <div className="heading">
                                    ALL OF VINSPACE
                                </div>

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
                    </div>
                </div>



            </div>

            <Footer></Footer>


        </div>
    );
};

export default HomeV2;
