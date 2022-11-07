/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './homeSearch.scss';

// import assets
// import search_icon from "../../../assets/search/search.png";

// import components;

const HomeSearch = (props)=>{
    return(
        <div className = 'home-search'>
            <div className="wrapper">
                <div className='search-help'>
                    <span>Learn more about search</span>
                </div>

                <div className='search-input'>
                    <div class="button">
                        Search
                    </div>

                    <input autocomplete="off" type="search" placeholder="Search"/>
                </div>
            <div className ="home-textLink">
                <ul>
                    <li className="service"><a href="#service">Services and Tools</a></li>
                    <li className="journal"><a href="#journal">Journal titles</a></li>
                    <li  className="data"><a href="#data">Databases</a></li>  
                    <li className="advanced"><a href="#contact">Advanced search</a></li>
                </ul>
            </div>
                
           
            </div>
        </div>
    );
}

export default HomeSearch;