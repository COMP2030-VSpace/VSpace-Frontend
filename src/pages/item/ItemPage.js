/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, createRef, useContext, useState } from "react";
import "./itemPage.scss";

// import components
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";

import Footer from "../../components/footer/Footer";
import Item from "../../components/item/Item";
import UserDetailItem from "../../components/userDetailItem/UserDetailItem";
import UserCommunity from "../../components/userCommunity/UserCommunity";
import SiteSearch from "../../components/search/siteSearch/SiteSearch";

// import assets
import pagination_arrow from "../../assets/admin/arrow-admin.png";

import { moveTo } from "../../utils/helperFunctions";

// import context
import { CommunityContext } from "../../contexts/CommunityContext";
import { ItemContext } from "../../contexts/ItemContext";

import SideMenu from "../../components/sideMenu/SideMenu";



import Cookies from 'js-cookie';
import { userRole } from "../../enums/enum";

const ItemPage = (props) => {
    
    const { getItemInfo } = useContext(ItemContext);
    const [chosenItem, setChosenItem] = useState();

    const [isAuthenticated, setAuthenticate] = useState(false);

    useEffect(() => {
        let checkLogin = (Cookies.get("role") && (Cookies.get("role")  !== userRole.USER));
        setAuthenticate(checkLogin);
    }, []);



    useEffect(() => {
        const loadItem = async () => {
            const path = window.location.pathname;
            const itemId = path.split("/").pop();

            const response = await getItemInfo(itemId);

            // console.log("helllloooo", response.data);
            setChosenItem(response.data)
        }

        loadItem();
        
    }, [])
    


    // Tung creates a similar function here

    return (
        <div className="item-detail">
            <div className="pageContentWrapper">
                <Navbar></Navbar>

                <div className="main">
                    {isAuthenticated &&
                        <SideMenu></SideMenu>   
                    }

                    <div className="main-right">
                        <div className="left">
                            {/* Tung starts here: Create a seperated component */}

                            {chosenItem &&
                                <UserDetailItem
                                    type = "detail"
                                    item = {chosenItem}
                                ></UserDetailItem>
                            }
                            
                            {/* Tung ends here */}
                        </div>

                        {/* <div className="right desktop">
                            <SiteSearch></SiteSearch>
                        </div> */}
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ItemPage;
