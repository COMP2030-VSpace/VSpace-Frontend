/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './sideMenu.scss';


// import assets
import sample_icon from "../../assets/side_menu/sample_icon.png";

// import components



const SideMenu = (props)=>{
    return(
        <>
            <div className="sidemenu-bg"></div>

            <div className = 'side-menu'>
                <div className='heading menu-item'>
                    Dashboard
                </div>

                <div className='common-items menu-item'>
                    <ul>
                        <li>
                            <div className='border'></div>
                            <div className='icon'>
                                <img src={sample_icon} alt = 'sample'></img>
                            </div>
                            <div className='text'>Access control</div>
                        </li>

                        <li>
                            <div className='border'></div>
                            <div className='icon'>
                                <img src={sample_icon} alt = 'sample'></img>
                            </div>
                            <div className='text'>Access control</div>
                        </li>

                        <li>
                            <div className='border'></div>
                            <div className='icon'>
                                <img src={sample_icon} alt = 'sample'></img>
                            </div>
                            <div className='text'>Access control</div>
                        </li>
                    </ul>
                </div>

                <div className='help-items menu-item'>
                    <ul>
                        <li>
                            <div className='border'></div>
                            <div className='icon'>
                                <img src={sample_icon} alt = 'sample'></img>
                            </div>
                            <div className='text'>Access control</div>
                        </li>

                        <li>
                            <div className='border'></div>
                            <div className='icon'>
                                <img src={sample_icon} alt = 'sample'></img>
                            </div>
                            <div className='text'>Access control</div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default SideMenu;