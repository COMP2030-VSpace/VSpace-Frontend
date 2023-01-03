/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './sideMenu.scss';


// import assets
import sample_icon from "../../assets/side_menu/sample_icon.png";
import logo_icon from "../../assets/side_menu/logo.png";
import new_icon from "../../assets/side_menu/new.png";
import edit_icon from "../../assets/side_menu/edit.png";
import import_icon from "../../assets/side_menu/import.png";
import export_icon from "../../assets/side_menu/export.png";
import access_control_icon from "../../assets/side_menu/access_control.png";
import admin_search_icon from "../../assets/side_menu/admin_search.png";
import registers_icon from "../../assets/side_menu/registers.png";
import curation_task_icon from "../../assets/side_menu/curation_task.png";
import processes_icon from "../../assets/side_menu/processes.png";
import health_icon from "../../assets/side_menu/health.png";
import admin_workflow_icon from "../../assets/side_menu/admin_workflow.png";
import arrow_down_icon from "../../assets/side_menu/arrow_down.png";
import arrow_right_icon from "../../assets/side_menu/arrow_right.png";



// import functions
import { moveTo } from '../../utils/helperFunctions';


// import components


const SideMenu = (props)=>{
    // states
    const [menuIsCollapsed, setMenuIsCollapsed] = useState(true);
    const [curMenuItem, setCurMenuItem] = useState(-1);

    // realtime data
    const menu_list = [
        {
            "icon": new_icon,
            "title": "New",
            "sub_menu_list":
            [
                {
                    "title": "Community",
                    "link":"/admin/community/add"
                },
                {
                    "title": "Collection",
                    "link":"/admin/collection/add"
                },
                {
                    "title": "Item",
                    "link":"/admin/item/add"
                }
                
            ]
        },
        {
            "icon": edit_icon,
            "title": "Edit",
            "sub_menu_list":
            [
                {
                    "title": "community",
                    "link":""
                },
                {
                    "title": "Collection",
                    "link":""
                },
                {
                    "title": "Item",
                    "link":""
                }
                
            ]
        },
        {
            "icon": import_icon,
            "title": "Import",
            "sub_menu_list":
            [
                {
                    "title": "community",
                    "link":""
                },
                {
                    "title": "Collection",
                    "link":""
                },
                {
                    "title": "Item",
                    "link":""
                }
                
            ]
        },
        {
            "icon": export_icon,
            "title": "Export",
            "sub_menu_list":
            [
                {
                    "title": "community",
                    "link":""
                },
                {
                    "title": "Collection",
                    "link":""
                },
                {
                    "title": "Item",
                    "link":""
                }
                
            ]
        },
        {
            "icon": access_control_icon,
            "title": "Access Control",
            "sub_menu_list":
            [
                {
                    "title": "community",
                    "link":""
                },
                {
                    "title": "Collection",
                    "link":""
                },
                {
                    "title": "Item",
                    "link":""
                }
                
            ]
        },
        {
            "icon": admin_search_icon,
            "title": "Admin Search",
            "sub_menu_list":
            [

            ]
        },
        {
            "icon": registers_icon,
            "title": "Registries",
            "sub_menu_list":
            [
                {
                    "title": "Community",
                    "link":""
                },
                {
                    "title": "Collection",
                    "link":""
                },
                {
                    "title": "Item",
                    "link":""
                }
                
            ]
        },
        {
            "icon": curation_task_icon,
            "title": "Curation Task",
            "sub_menu_list":
            [

            ]
        },
        {
            "icon": processes_icon,
            "title": "Processes",
            "sub_menu_list":
            [

            ]
        },
        {
            "icon": health_icon,
            "title": "Health",
            "sub_menu_list":
            [
   
            ]
        },
        {
            "icon": admin_workflow_icon,
            "title": "Administer Workflow",
            "sub_menu_list":
            [

            ]
        }
    ]


    // functions
    const collapse = () => {
        console.log("leaving...");
        setMenuIsCollapsed(true);
    }

    const expand = () => {
        console.log("Enter...");
        setMenuIsCollapsed(false);
    }

    const switch_sub_list = (key) => {
        if(curMenuItem === key){
            setCurMenuItem(-1);
        }
        else{
            setCurMenuItem(key);
        }
    }


    return(
        <>
            <div className = {["sidemenu-bg", menuIsCollapsed ? "collapsed" : "expand"].join(" ")}
                onMouseEnter = {() => expand()}
            ></div>

            <div className = {['side-menu' , menuIsCollapsed ? "collapsed" : "expand"].join(" ")}
                onMouseLeave = {() => collapse()}
            >
                {!menuIsCollapsed &&
                    <>

                        <div className='heading menu-item'>
                            <ul>
                                <li>
                                    <div className='heading-border'></div>
                                    <div className='icon'>
                                        <img src={logo_icon} alt = 'logo'></img>
                                    </div>
                                    <div className='text'>Management</div>
                                </li>
                            </ul>
                        </div>

                        <div className='common-items menu-item'>
                            <ul>
                                {menu_list.map((menu_item, key) => 
                                    <li key = {key}>
                                        <div className='top' onClick = {() => switch_sub_list(key)}>
                                            <div className='border'></div>
                                            <div className='icon'>
                                                <img src={menu_item.icon} alt = {menu_item.title}></img>
                                            </div>
                                            <div className='text'>{menu_item.title}</div>

                                            {menu_item.sub_menu_list.length > 0 &&
                                                <div className='arrow'>
                                                    {key !== curMenuItem &&
                                                        <img src={arrow_right_icon} alt = "expand_sub_list"></img>
                                                    }

                                                    {key === curMenuItem &&
                                                        <img src={arrow_down_icon} alt = "collapsed_sub_list"></img>
                                                    }
                                                </div>
                                            }
                                        </div>

                                        {key === curMenuItem &&
                                            <>
                                                <div className='submenu'>
                                                    <ul>
                                                        {menu_item.sub_menu_list.map((sub_menu_item, sub_key) => 
                                                            <li key = {sub_key}>
                                                                <div className='subtop'>
                                                                    <div className='text' onClick={() => moveTo(sub_menu_item.link)}>{sub_menu_item.title}</div>
                                                                </div>
                                                            </li>
                                                        )}
                                                    </ul>
                                                </div>
                                            </>
                                        }
                                    </li>
                                )}
                            </ul>
                        </div>

                        {/* <div className='help-items menu-item'>
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
                        </div> */}
                    </>
                }



                {menuIsCollapsed &&
                    <>

                        <div className='heading-collapsed menu-item' onMouseEnter = {() => expand()}>
                            <ul>
                                <li>
                                    <div className='top'>
                                        <div className='icon'>
                                            <img src={logo_icon} alt = 'logo'></img>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className='common-items menu-item' onMouseEnter = {() => expand()}>
                            <ul>
                                {menu_list.map((menu_item,key) => 
                                    <li key = {key}>
                                        <div className='top'>
                                            <div className='icon'>
                                                <img src={menu_item.icon} alt = {menu_item.title}></img>
                                            </div>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>

                        {/* <div className='help-items menu-item' onMouseEnter = {() => expand()}>
                            <ul>
                                <li>
                                    <div className='icon'>
                                        <img src={sample_icon} alt = 'sample'></img>
                                    </div>
                                </li>

                                <li>
                                    <div className='icon'>
                                        <img src={sample_icon} alt = 'sample'></img>
                                    </div>
                                </li>
                            </ul>
                        </div> */}
                    </>
                }
            </div>
        </>
    );
}

export default SideMenu;