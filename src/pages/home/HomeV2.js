/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, createRef, useContext, useState } from "react";
import "./homeV2.scss";

// import components
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import HomeSearch from "../../components/search/homeSearch/HomeSearchV2";
import Footer from "../../components/footer/Footer";
import Item from "../../components/item/Item";

import { moveTo } from "../../utils/helperFunctions";

// import context
import { CommunityContext } from "../../contexts/CommunityContext";
import { SearchContext } from "../../contexts/SearchContext";

const HomeV2 = (props) => {
    const { getCommunities } = useContext(CommunityContext);
    const { searchTopAuthors, searchTopSubjects, searchTopDateIssued } = useContext(SearchContext);

    const [communities, setCommunities] = useState([]);
    const [topAuthors, setTopAuthors] = useState([]);
    const [topSubjects, setTopSubjects] = useState([]);
    const [topDateIssue, setTopDateIssued] = useState([]);


    useEffect(() => {
        const loadCommunities = async () => {
            const response = await getCommunities();
            const data = response.data["_embedded"].communities

            console.log(data);

            setCommunities(data);
        }

        const loadTopAuthors = async () => {
            const response = await searchTopAuthors();
            // console.log(response);

            const data = response.data["_embedded"].values.slice(0,5);

            // console.log(data);

            setTopAuthors(data);
        }

        const loadTopSubjects = async () => {
            const response = await searchTopSubjects();
            // console.log(response);

            const data = response.data["_embedded"].values.slice(0,5);

            // console.log(data);

            setTopSubjects(data);
        }

        const loadTopDateIssued = async () => {
            const response = await searchTopDateIssued();
            // console.log(response);

            const data = response.data["_embedded"].values.slice(0,5);

            // console.log(data);

            setTopDateIssued(data);
        }

        loadCommunities();
        loadTopAuthors();
        loadTopSubjects();
        loadTopDateIssued();
    }, [])

    return (
        <div className="home">
            <div className="pageContentWrapper">
                <Navbar></Navbar>
                <Banner></Banner>

                <div className="main">
                    <div className="left">
                        <div className="about item">
                            <div className="heading">
                                <h2>VinSpace</h2>
                            </div>

                            <div className="info">
                                VinSpace is VinUniversity's institutional repository (IR). It is a digital service that collects, preserves, and distributes digital material. The collections and content in AUSpace can be browsed and searched. If you have any questions, please email auspace@athabascau.ca.
                            </div>
                        </div>


                        <div className="community-list item">
                            <div className="heading">
                                <h2>Communities in VinSpace</h2>
                            </div>

                            <div className="list">
                                <div className="list-heading">
                                    Select a community to browse its collections.
                                </div>
                                <div className="list-main">
                                    <ul>
                                        {communities.map((community, key) => {
                                            return <li onClick={() => moveTo("/community/" + community.uuid)}>{community.name}</li> 
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="recent-add item">
                            <div className="heading">
                                <h2>Recently Added</h2>
                            </div>

                            <div className="item-list">
                                <Item></Item>

                                <Item></Item>
                            </div>
                        </div>
                    </div>

                    <div className="right desktop">
                        <div className="item mb2">
                            <HomeSearch></HomeSearch>
                        </div>

                        <div className="browse item mb2">
                            <div className="text mb1">BROWSE</div> 

                            <div className="vinspace-list">
                                <div className="heading">
                                    ALL OF VinSpace
                                </div>

                                <div className="browse-list">
                                    <ul>
                                        <li>Communities & Collections</li>
                                        <li>By Issue Date</li>
                                        <li>Authors</li>
                                        <li>Titles</li>
                                        <li>Subjects</li> 
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="browse item">
                            <div className="text mb1">DISCOVER</div> 

                            <div className="vinspace-list mb1">
                                <div className="heading">
                                    Author
                                </div>

                                <div className="browse-list">
                                    <ul>
                                        {topAuthors.map((author) => {
                                            return <li>{author.label} ({author.count})</li> 
                                        })}
                                    </ul>
                                </div>
                            </div>

                            <div className="vinspace-list mb1">
                                <div className="heading">
                                    Subject
                                </div>

                                <div className="browse-list">
                                    <ul>
                                        {topSubjects.map((subject) => {
                                            return <li>{subject.label} ({subject.count})</li> 
                                        })}
                                    </ul>
                                </div>
                            </div>

                            <div className="vinspace-list">
                                <div className="heading">
                                    Date Issued
                                </div>

                                <div className="browse-list">
                                    <ul>
                                        {topDateIssue.map((date) => {
                                            return <li>{date.label} ({date.count})</li> 
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <Footer></Footer>


        </div>
    );
};

export default HomeV2;
