/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, createRef, useContext, useState } from "react";
import "./about.scss";

// import components
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import arrow from "../../assets/about/arrow.png";

const About = (props) => {
    return (
        <div className="about">
            <Navbar></Navbar>
            <Banner></Banner>

            <div className="main">
                <div className="gen-intro">
                    <div className="content">
                        <h2>LIBRARY</h2>
                        <br/>
                        <span>
                            VinUni Library seeks to advance the intellectual
                            life of the University community through resources
                            and services that support faculty research as well
                            as students’ successful learning outcomes and
                            personal development.
                        </span>

                        <br />
                        <br />

                        <span>
                            The library offers 4 main types of spaces to support
                            learning, teaching, research, innovation, and
                            entrepreneurial activities.
                        </span>
                    </div>

                    <div className="button-div">
                        <button className="button"  >
                            <div className="button-content">
                                <span>SEARCH THE LIBRARY</span>
                                <img src={arrow} style={{ width: "20px" }} />
                            </div>
                        </button>
                    </div>
                </div>

                <div className="two-col">{/* Thao works here */}</div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default About;
