/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './home.scss';


// import components
import Navbar from "../../components/navbar/Navbar";
import Banner from '../../components/banner/Banner';
import HomeSearch from '../../components/search/homeSearch/HomeSearch';
import Footer from '../../components/footer/Footer';

const Home = (props)=>{
    return(
        <div className = 'home'>
            <Navbar></Navbar>
            <Banner></Banner>

            <div className="main">
                <div className="left">
                    <div className='item'>
                        <div className="header">
                            <h3>Search</h3>
                        </div>
                        <div className="item-main">
                            <HomeSearch></HomeSearch>
                        </div>
                    </div>


                    <div className='item'>
                        <div className="header">
                            <h3>Submit your contribution</h3>
                        </div>
                        <div className="item-main">
                            <p>Sumbit your document, research paper, image, data set and more into VinUni's digital respository.</p>
                        </div>
                        <div>
                            <button className="submit-button">Submit your work</button>
                            <p className='submit-text'>How to submit?</p>
                        </div>
                    </div>

                </div>
                <div className="right">
                    <div className='item'>
                        <div className="header">
                            <h3>Browse by</h3>
                        </div>
                        <div className="item-main">
                            <ul> 
                                <li>Communities & Collections</li>
                                <li>Issue Dates</li>
                                <li>Tittles</li>
                                <li>Authors</li>
                                <li>Subjects</li>
                            </ul>
                        </div>
                        <div className = "collections">
                            <span>View all collections</span>
                        </div>
                    </div>

                    <div className='item'>
                        <div className="header">
                            <h3>Browse Collections</h3>
                        </div>
                        <div className="item-main">
                            <ul> 
                                <li>College of Business & Management</li>
                                <li>College of Engineering & Computer Science</li>
                                <li>College of Health Science</li>
                                <li>College of Arts & Science</li>
                                <li>Smart Health Center</li>
                            </ul>
                        </div>
                        <div className = "collections">
                            <span>View all collections</span>
                        </div>
                    </div>

                </div>
            </div>


            <Footer></Footer>
        </div>
    );
}

export default Home;