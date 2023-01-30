/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, createRef, useContext, useState } from "react";
import "./homeV2.scss";

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

const HomeV2 = (props) => {
    const { getCommunities } = useContext(CommunityContext);
    
    const { getRecentItemsFromSite } = useContext(ItemContext);

    const [communities, setCommunities] = useState([]);
    const [recentItems, setRecentItems] = useState([]);
    
    const [curPage, setCurPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [totalElements, setTotalElements] = useState(1);
    
    const [isDisplayItem, setIsDisplayItem] = useState(false);
    const [isDisplayCommunity, setIsDisplayCommunity] = useState(false);
    // const [communityId, setCommunityId] = useState("");

    const [chosenCommunity, setChosenCommunity] = useState({});
    const [chosenItem, setChosenItem] = useState({});

    const itemsPerPage = 5;


    useEffect(() => {
        const loadCommunities = async () => {
            const page = curPage - 1;
            const response = await getCommunities(page, itemsPerPage);
            const pageInfo = response.data.page
            setTotalPage(pageInfo.totalPages)
            setTotalElements(pageInfo.totalElements);
            
            const data = response.data["_embedded"].communities;

            // console.log(data);

            setCommunities(data);
        };


        loadCommunities();
    }, [curPage])

    useEffect(() => {
        const loadRecentItems = async () => {
            const response = await getRecentItemsFromSite();

            // console.log(response);

            const data = response.data["_embedded"].searchResult["_embedded"].objects;

            setRecentItems(data);
        }

        loadRecentItems();
    }, [])

    const handleShowItemDetail = (item) => {
        console.log("item displaying...");
        // set isDisplayItem to true
        setChosenItem(item);
        setIsDisplayItem(true);
    };
    
    const handleShowCommunity = (community) => {
        // set isDisplayItem to true
        // console.log(id);
        setChosenCommunity(community);
        setIsDisplayCommunity(true);
    };


    const backHome = (type) => {
        if(type === "item"){
            setIsDisplayItem(false);
        }
        
        if(type === "community"){
            setIsDisplayCommunity(false)
        }
    }

    // Tung creates a similar function here

    return (
        <div className="home">
            <div className="pageContentWrapper">
                <Navbar></Navbar>
                <Banner></Banner>

                <div className="main">
                    {!isDisplayItem && !isDisplayCommunity && (
                        <div className="left">
                            <div className="about item">
                                <div className="heading">
                                    <h2>VinSpace</h2>
                                </div>

                                <div className="info">
                                    VinSpace is VinUniversity's institutional
                                    repository (IR). It is a digital service
                                    that collects, preserves, and distributes
                                    digital material. The collections and
                                    content in AUSpace can be browsed and
                                    searched. If you have any questions, please
                                    email auspace@athabascau.ca.
                                </div>
                            </div>

                            <div className="community-list item">
                                <div className="heading">
                                    <h2>Communities in VinSpace</h2>
                                </div>

                                <div className="list">
                                    <div className="list-heading">
                                        Select a community to browse its
                                        collections.
                                    </div>
                                    <div className="list-main">
                                        <ul>
                                            {communities.map(
                                                (community, key) => {
                                                    return (
                                                        <li
                                                            onClick={() =>
                                                                handleShowCommunity(community)
                                                            }
                                                        >
                                                            {community.name}
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </ul>
                                    </div>
                                </div>

                                <div className="blocklist">
                                    {curPage > 1 &&
                                        <div className="block" style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>
                                            <img 
                                                src={pagination_arrow} 
                                                alt="" 
                                                onClick={() => {setCurPage(curPage - 1)}}
                                            />
                                        </div>
                                    }
                                    {[...Array(totalPage)].map((page, i) => {
                                        if(i+1 === curPage){
                                            return <div 
                                                        className="block active" 
                                                        key = {i}
                                                        onClick = {() => {setCurPage(i+1)}}
                                                    >{i+1}</div>
                                        }
                                        
                                        return <div 
                                                    className="block" 
                                                    key = {i}
                                                    onClick = {() => {setCurPage(i+1)}}
                                                >{i+1}</div>
                                    })}

                                    {/* <div className="block">...</div>
                                    <div className="block" style={{ borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}>20</div> */}
                                
                                </div>
                            </div>

                            <div className="recent-add item">
                                <div className="heading">
                                    <h2>Recently Added</h2>
                                </div>

                                <div className="item-list">
                                    {recentItems.map((item) => {
                                        return <Item 
                                                    data = {item["_embedded"].indexableObject}
                                                    handleOnClick={() =>
                                                        handleShowItemDetail(item)
                                                    }
                                                >
                                                </Item>
                                    })}
                                    
                                </div>

                            </div>
                        </div>
                    )}

                    {isDisplayItem && (
                        <div className="left">
                            {/* Tung starts here: Create a seperated component */}
                            <UserDetailItem
                                backHome = {backHome}
                                item = {chosenItem}
                                handleShowItemDetail = {handleShowItemDetail}
                            ></UserDetailItem>
                            
                            {/* Tung ends here */}
                        </div>
                    )}

                    {isDisplayCommunity && (
                        <div className="left">
                            <UserCommunity
                                backHome = {backHome}
                                community = {chosenCommunity}
                                handleShowCommunity = {handleShowCommunity}
                            ></UserCommunity>
                        </div>
                    )}

                    <div className="right desktop">
                        <SiteSearch></SiteSearch>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default HomeV2;
