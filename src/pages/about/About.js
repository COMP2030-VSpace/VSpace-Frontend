/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './about.scss';


// import components
import Navbar from "../../components/navbar/Navbar";
import Banner from '../../components/banner/Banner';
import Footer from "../../components/footer/Footer";


const About = (props)=>{
    return(
        <div className = 'about'>
            <Navbar></Navbar>
            <Banner></Banner>

            <div className="main">
                <div className='gen-intro'>
                    {/* Tung works here */}
                </div>



                <div className='two-col'>
                    {/* Thao works here */}
                    <div className='about_left'>
                        <div className='item'>
                            <div className='header'>
                                <h3>COLLABORATION SPACES</h3>
                            </div>

                            <div className='item-main'>
                                <p>
                                Library patrons can work with one another in various group configurations in our fully-equipped discussion rooms, 
                                open discussion booths, and comfortable seating lounge on both floors.
                                Patrons have access to maker innovation spaces, studios, teleconference rooms, and a PC lab with high-end computers and adaptive software. 
                                The 24/7 learning common on the first floor is open to patrons at all hours of the day and night for those late night projects and essential discussions! 
                                Advanced reservations may be required for some of the specialized spaces.
                                </p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className="header">
                                <h3>SANCTUARY SPACES</h3>
                            </div>

                            <div className="item-main">
                                <p>While the library can be a hub of collaborative learning activities, it is also a place where patrons can find safety in silence. 
                                    There are plenty of quiet spaces for thinking, reflection, and creative work. 
                                    Located close to the book stacks, these quiet spaces are ideal for those seeking to study on their own in silence.</p>
                            </div>
                        </div>
                    </div>

                    <div className='about_right'>
                        <div className='item'>
                            <div className = "header">
                                <h3>CONSULTATION SPACES</h3>
                            </div>

                            <div className="item-main">
                                <p>Library patrons can work with one another in various group configurations in our fully-equipped discussion rooms, open discussion booths, and comfortable seating lounge on both floors. 
                                    Patrons have access to maker innovation spaces, studios, teleconference rooms, and a PC lab with high-end computers and adaptive software. 
                                    The 24/7 learning common on the first floor is open to patrons at all hours of the day and night for those late night projects and essential discussions! 
                                    Advanced reservations may be required for some of the specialized spaces.</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className="header">
                                <h3>SANCTUARY SPACES</h3>
                            </div>

                            <div className="item-main">
                                <p>While the library can be a hub of collaborative learning activities, it is also a place where patrons can find safety in silence. 
                                    There are plenty of quiet spaces for thinking, reflection, and creative work. 
                                    Located close to the book stacks, these quiet spaces are ideal for those seeking to study on their own in silence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}

export default About;