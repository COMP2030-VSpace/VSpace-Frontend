/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, createRef, useContext, useState } from "react";
import "./search.scss";

// import components
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import HomeSearch from "../../components/search/homeSearch/HomeSearchV2";
import Footer from "../../components/footer/Footer";
import Item from "../../components/item/Item";

import { moveTo } from "../../utils/helperFunctions";

// import assets

import arrow from '../../assets/search/arrow.png';

// import context
import { CommunityContext } from "../../contexts/CommunityContext";

const Search = (props) => {


    return (
        <div className="search">
            <div className="pageContentWrapper">
                <Navbar></Navbar>
                <Banner></Banner>

                <div className="main">
                    <div className="left">
                        <div className="header">
                            <h2>Search</h2>
                        </div>

                        <div className="search-bar">
                            <div className="selection-bar">
                                All of VinSpace
                                <img src = {arrow} alt = "arrow"/>
                            </div>

                            <div className='search-input'>
                                <input className="search" autocomplete="off" type="search" placeholder="Search..."/>

                                <div class="tmp-button">
                                    Go
                                </div>
                            </div>
                        </div>

                        <div className="show-more-txt">
                                Show advanced filters
                        </div>

                        <div className="result-txt">
                            Search produced no results.
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

export default Search;
