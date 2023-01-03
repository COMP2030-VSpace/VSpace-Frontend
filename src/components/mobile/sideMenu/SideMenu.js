/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './sideMenu.scss';

// import functions
import { moveTo } from "../../../utils/helperFunctions";

// import assets
import hamburgerMenu from "../../../assets/navbar/hamburger-menu.png"

// import components;

const SideMenu = (props)=>{

    const [isDisplay, setIsDisplay] = useState(false)

    const showDropdownMenu = () => {
        setIsDisplay(!isDisplay)
    }


    return(
        <div className="ham-side-menu">
            <img src={hamburgerMenu} alt = "menu"></img>
        </div>
    );
}

export default SideMenu;