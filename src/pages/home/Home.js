/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, createRef, useContext, useState } from "react";
import "./home.scss";

// import components
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import HomeSearch from "../../components/search/homeSearch/HomeSearch";
import Footer from "../../components/footer/Footer";

const Home = (props) => {
  return (
    <div className="home">
      <div className="pageContentWrapper">
        <Navbar></Navbar>
        <Banner></Banner>

        <div className="main">
          <div className="left">
            <div className="item">
              <div className="header">
                <h3>Search</h3>
              </div>
              <div className="item-main">
                <HomeSearch></HomeSearch>
              </div>
            </div>

            <div className="item">
              <div className="header">
                <h3>Submit your contribution</h3>
              </div>
              <div className="item-main"></div>
            </div>
          </div>
          <div className="right">
            <div className="item">
              <div className="header">
                <h3>Browse by</h3>
              </div>
              <div className="item-main"></div>
            </div>

            <div className="item">
              <div className="header">
                <h3>Browse Collections</h3>
              </div>
              <div className="item-main"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
