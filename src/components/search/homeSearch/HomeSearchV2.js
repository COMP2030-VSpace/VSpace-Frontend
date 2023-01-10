/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './homeSearchV2.scss';

// import assets
import search_icon from "../../../assets/search/searchv2.png";

// import components;

const HomeSearchV2 = (props)=>{
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (event) => {
        // console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    const submitSearch = () => {
        const url = "/search?query=" + searchValue.trim();
        window.location.href = url;
    }

    return(
        <div className = 'home-search'>
            <div className="wrapper">
                <div className='search-input'>
                    <div class="tmp-button">
                        <img 
                            src={search_icon} 
                            alt = 'search'
                            onClick={() => submitSearch()}
                        ></img>
                    </div>

                    <input
                        autocomplete="off" 
                        type="search" 
                        placeholder="Search"
                        value={searchValue}
                        onChange = {(event) => handleChange(event)}
                    />
                </div>
            </div>
        </div>
    );
}

export default HomeSearchV2;