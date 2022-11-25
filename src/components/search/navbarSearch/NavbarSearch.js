/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './navbarSearch.scss';

// import assets
import search_icon from "../../../assets/search/search.png";

// import components;

const NavbarSearch = (props)=>{
    return(
        <div className = 'navbar-search'>
            <div className="wrapper">
                <input class="search-field" type="search" value="" name="s" placeholder='Search VinSpace Site'></input>
                <span class="search-button">
                    <img src= {search_icon} alt="search icon"></img>
                </span>
            </div>
        </div>
    );
}

export default NavbarSearch;