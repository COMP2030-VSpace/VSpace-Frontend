/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, createRef, useContext, useState } from "react";
import "./dashboard.scss";
// import { Container } from "reactstrap";

// import components
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import SideMenu from "../../../components/sideMenu/SideMenu";
import Banner from "../../../components/banner/Banner";

// import functions
import { moveTo } from "../../../utils/helperFunctions";

// import assets
import thumb from "../..//../assets/admin/thumbnail.png";
import arrow from "../..//../assets/admin/up-arrow.png";
import search from "../../../assets/admin/search-admin.png";
import pagination_arrow from "../../../assets/admin/arrow-admin.png"

// import context
import { CommunityContext } from "../../../contexts/CommunityContext";
import { ItemContext } from "../../../contexts/ItemContext";

const Dashboard = (props) => {

    const { getCommunities } = useContext(CommunityContext);
    const { getRecentItemsFromSite } = useContext(ItemContext);
    
    const [communities, setCommunities] = useState([])
    const [curPage, setCurPage] = useState(1);
    const [totalElements, setTotalElements] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const itemsPerPage = 5;
    const [recentItems, setRecentItems] = useState([]);

    useEffect(() => {
        const loadCommunities = async () => {
            const page = curPage - 1;
            const response = await getCommunities(page, itemsPerPage);
            // console.log(response);
            const pageInfo = response.data.page
            setTotalPage(pageInfo.totalPages)
            setTotalElements(pageInfo.totalElements);

            const data = response.data["_embedded"].communities

            // console.log(data);

            setCommunities(data);
            
        }

        const loadRecentItems = async () => {
            const response = await getRecentItemsFromSite();

            // console.log(response);

            const data = response.data["_embedded"].searchResult["_embedded"].objects;

            setRecentItems(data);
        }

        loadCommunities();
        loadRecentItems();
    }, [curPage])



    return (
        <div className="dashboard">
            <Navbar></Navbar>

            {/* <Banner></Banner> */}

            <div className="main">
                {/* <div className="sidemenu-bg"></div> */}
                <SideMenu></SideMenu>

                <div className="main-right">
                    {/* Tung starts here */}
                    
                    <div className="customized-banner">
                        <Banner></Banner>
                    </div>

                    <div className="wrapper">                        
                        <div className="search">
                            <input
                                type="text"
                                placeholder="Search the repository"
                                className="searchbar"
                            />
                            <div className="button">
                                <img
                                    src={search}
                                    alt=""
                                    className="searchimage"
                                    style={{ width: "37px", height: "37px" }}
                                />
                                <span style={{ color: "white" }}>Search</span>
                            </div>
                        </div>

                        <div className="text">
                            <h2 className="text__header">Community in DSpace</h2>
                            <h3 className="text__secondheader">Select a community to browse its collections.</h3>
                            <p className="header__ul">Now showing {itemsPerPage * (curPage-1) + 1} - {itemsPerPage * curPage < totalElements ? itemsPerPage * curPage : totalElements} of {totalElements}</p>
                            <ul>
                                {communities.map((community, key) => {
                                    return <li onClick={() => moveTo("/admin/community/" + community.uuid)}>{community.name}</li> 
                                })}
                                
                                
                            </ul>
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
                    {/* Tung ends here */}









                    {/* Thao starts here */}
                    <div className="wrapper">
                        <div className="bottom">
                            <div className="header">
                                <h2 className="text__header">Recent Submissions</h2>
                            </div>

                            <div className="item">
                                {recentItems.map((item) => {
                                    const data = item["_embedded"].indexableObject;
                                    return <div className="item-content">
                                                <div className="thumb">
                                                    <img src= {thumb} alt="Thumbnail"/>
                                                </div>

                                                <div className="thumb-info">
                                                    <div className="tag">
                                                        <span className="tag1">datafile.listelement.badge</span>
                                                        <span className="tag2">Open Access</span>
                                                    </div>

                                                    <div className="item-header">
                                                        <h3>{data.metadata["dc.title"][0].value}</h3>
                                                    </div>

                                                    <div className="item-sub">
                                                        <h4>
                                                            (VinSpace, 2022-11-15) {data.metadata["dc.contributor.author"].map((author, idx) => {
                                                                return <>{author.value}{idx === data.metadata["dc.contributor.author"].length - 1 ? " " : ", "}</>
                                                            })}
                                                        </h4>
                                                    </div>

                                                    <div className="item-main">
                                                        <div className="content">
                                                            {data.metadata["dc.description.abstract"][0].value}
                                                        </div>
                                                    </div>

                                                    <label for="text-button" className="show-button">
                                                        <img src={arrow}/>
                                                        <p>Show more</p>
                                                    </label>
                                                </div>
                                            </div> 
                                })}

                                


                            </div>

                            <div className="load-button">
                                <span>Load more ...</span>
                            </div>
                        </div>
                    </div>

                    {/* Thao ends here */}
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Dashboard;
