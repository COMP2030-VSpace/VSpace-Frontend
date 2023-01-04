/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, createRef, useContext, useState } from "react";
import "./sideMenu.scss";

// import functions
import { moveTo } from "../../../utils/helperFunctions";

// import assets
import HomeSearch from "../../search/homeSearch/HomeSearchV2";
import hamburgerMenu from "../../../assets/navbar/hamburger-menu.png";

// import components;

const SideMenu = (props) => {
    const [isDisplay, setIsDisplay] = useState(false);

    const showDropdownMenu = () => {
        setIsDisplay(!isDisplay);
    };

    return (
        <div className="ham-side-menu">
            <div className="wrapper">
                <img
                    src={hamburgerMenu}
                    alt="menu"
                    onClick={() => showDropdownMenu()}
                ></img>
            </div>

            {isDisplay && (
                // <div className="wrapper-right">
                    <div className="hamright mobile">
                        
                    </div>
                // </div>
            )}
        </div>
    );
};

export default SideMenu;
