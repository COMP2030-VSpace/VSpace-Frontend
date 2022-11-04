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
            </div>
        </div>
    );
}

export default HomeSearch;