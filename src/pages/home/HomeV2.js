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
                <Banner></Banner>

                <div className="main">
                    <div className="left">
                        <div className="about item">
                            <div className="heading">
                                <h2>VinSpace</h2>
                            </div>

                            <div className="info">
                                VinSpace is VinUniversity's institutional repository (IR). It is a digital service that collects, preserves, and distributes digital material. The collections and content in AUSpace can be browsed and searched. If you have any questions, please email auspace@athabascau.ca.
                            </div>
                        </div>


                        <div className="community-list item">
                            <div className="heading">
                                <h2>Communities in VinSpace</h2>
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
                                <h2>Recently Added</h2>
                            </div>

                            <div className="item-list">
                                <Item></Item>

                                <Item></Item>
                            </div>
                        </div>
                    </div>

                    <div className="right desktop">
                        <div className="item mb2">
                            <HomeSearch></HomeSearch>
                        </div>

                        <div className="browse item mb2">
                            <div className="text mb1">BROWSE</div> 

                            <div className="vinspace-list">
                                <div className="heading">
                                    ALL OF VinSpace
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

                        <div className="browse item">
                            <div className="text mb1">DISCOVER</div> 

                            <div className="vinspace-list mb1">
                                <div className="heading">
                                    Author
                                </div>

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
                                <div className="heading">
                                    Subject
                                </div>

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
                                <div className="heading">
                                    Date Issued
                                </div>

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
                </div>



            </div>

            <Footer></Footer>


        </div>
    );
};

export default HomeV2;
