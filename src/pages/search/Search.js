/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, createRef, useContext, useState } from "react";
import "./search.scss";

// import components
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import HomeSearch from "../../components/search/homeSearch/HomeSearchV2";
import Footer from "../../components/footer/Footer";
import SiteSearch from "../../components/search/siteSearch/SiteSearch";

// import assets
import thumb from "../../assets/admin/thumbnail.png";
import arrow from '../../assets/search/arrow.png';

// import context
import { SearchContext } from "../../contexts/SearchContext";

const Search = (props) => {
    const { searchSite } = useContext(SearchContext);

    const [searchRes, setSearchRes] = useState([]);

    useEffect(() => {
        const searchItems = async () => {
            const search = window.location.search;
            const params = new URLSearchParams(search);
            const keyword = params.get('query');

            const response = await searchSite(keyword);

            console.log(response.data["_embedded"].searchResult["_embedded"].objects);
            setSearchRes(response.data["_embedded"].searchResult["_embedded"].objects)
        }

        searchItems();
    }, []);

    return (
        <div className="search">
            <div className="pageContentWrapper">
                <Navbar></Navbar>
                <Banner></Banner>

                <div className="main">
                    <div className="left">
                        <div className="header">
                            <h2>Search</h2>
                        </div>

                        <div className="search-bar">
                            {/* <div className="selection-bar">
                                All of VinSpace
                                <img src = {arrow} alt = "arrow"/>
                            </div> */}

                            <div className="selection-bar">
                                <select>
                                    <option>All of VinSpace</option>
                                    <option>Communities & Collections</option>
                                    <option>By Issue Date</option>
                                    <option>Authors</option>
                                    <option>Titles</option>
                                    <option>Subjects</option>
                                </select>
                            </div>

                            <div className='search-input'>
                                <input className="search" autocomplete="off" type="search" placeholder="Search..."/>

                                <div class="tmp-button">
                                    Go
                                </div>
                            </div>
                        </div>

                        <div className="show-more-txt">
                                Show advanced filters
                        </div>

                        <div className="header-result">
                            <h2>Search Results</h2>
                        </div>

                        <div className="result-txt">
                            Now showing 1 - 10 of 8744
                        </div>

                        <div className="item">
                                {searchRes.map((item) => {
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

                    </div>

                    <div className="right desktop">
                        <SiteSearch></SiteSearch>
                    </div>
                </div>



            </div>

            <Footer></Footer>


        </div>
    );
};

export default Search;
