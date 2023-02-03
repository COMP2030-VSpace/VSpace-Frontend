/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './hamMenu.scss';

// import functions
import { moveTo } from "../../../utils/helperFunctions";

// import assets
import hamburgerMenu from "../../../assets/navbar/hamburger-menu.png"

// import components;

const HamMenu = (props)=>{

    const [isDisplay, setIsDisplay] = useState(false)

    const showDropdownMenu = () => {
        setIsDisplay(!isDisplay)
    }


    return(
        <div className="ham-menu">
            <div className='wrapper'>
                <img 
                    src={hamburgerMenu} alt = "menu"
                    onClick={() => showDropdownMenu()}
                ></img>
            </div>

            {isDisplay && 
                <div className="dropdown-menu" id = "ham-dropdown-menu-id">
                    <ul>
                        {props.items.map((item) => (
                            <li onClick={() => moveTo(item.link)}>{item.title}</li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    );
}

export default HamMenu;