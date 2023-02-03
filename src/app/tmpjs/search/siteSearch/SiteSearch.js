/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './siteSearch.scss';

// import assets
// import search_icon from "../../../assets/search/search.png";

// import components;
import HomeSearch from '../homeSearch/HomeSearchV2';

// import contexts
import { SearchContext } from '../../../contexts/SearchContext';

const SiteSearch = (props)=>{
    const { searchTopAuthors, searchTopSubjects, searchTopDateIssued } = useContext(SearchContext);

    const [topAuthors, setTopAuthors] = useState([]);
    const [topSubjects, setTopSubjects] = useState([]);
    const [topDateIssue, setTopDateIssued] = useState([]);


    useEffect(() => {
    
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


        loadTopAuthors();
        loadTopSubjects();
        loadTopDateIssued();
    }, [])

    return(
        <div className='site-search'>
            <div className="item mb2">
                <HomeSearch></HomeSearch>
            </div>

            <div className="browse item mb2">
                <div className="text mb1">BROWSE</div>

                <div className="vinspace-list">
                    <div className="heading">ALL OF VinSpace</div>

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
                    <div className="heading">Author</div>

                    <div className="browse-list">
                        <ul>
                            {topAuthors.map((author) => {
                                return <li>{author.label} ({author.count})</li> 
                            })}
                        </ul>
                    </div>
                </div>

                <div className="vinspace-list mb1">
                    <div className="heading">Subject</div>

                    <div className="browse-list">
                        <ul>
                            {topSubjects.map((subject) => {
                                return <li>{subject.label} ({subject.count})</li> 
                            })}
                        </ul>
                    </div>
                </div>

                <div className="vinspace-list">
                    <div className="heading">Date Issued</div>

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
    );
}

export default SiteSearch;