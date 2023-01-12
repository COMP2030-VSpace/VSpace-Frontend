import {useEffect, createRef, useContext, useState} from 'react';

import "./userCommunity.scss";

import book from "../../assets/admin/book.png";

import Button from '../button/Button';
import { CommunityContext } from '../../contexts/CommunityContext';
import { CollectionContext } from '../../contexts/CollectionContext';

const UserCommunity = (props) => {
    const [searchType, setSearchType] = useState(1);

    const { getSubCommunities } = useContext(CommunityContext);
    const { getCollections } = useContext(CollectionContext);
    const [itemId, setItemId] = useState("");

    const [communities, setCommunities] = useState([]);
    const [collections, setCollections] = useState([]);


    const changeSearchType = (type) => {
        setSearchType(type);
        return;
    }


    useEffect(() => {
        const id = props.communityId;
        setItemId(id);

        console.log(id);

        const loadData = async (id) => {
            // get sub communities
            const response1 = await getSubCommunities(id);
            console.log(response1);

            // get collections
            const response2 = await getCollections(id);
            console.log(response2);
        }

        loadData(id);
    }, []);


    return (
        <div className="user-community">
            <div className='heading'>
                <Button 
                    styles = {{
                        "height": "2.6rem",
                        // "width": "90%",
                        "background": " #2E5288",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "color": "#ffffff",
                        "padding": "0.05rem 1.5rem",
                        "margin": "0"
                    }}

                    content = "Back"

                    handleClick = {() => props.backHome("community")}
                ></Button>

                <h2>
                    Athabasca River Basin Research Institute
                </h2>
            </div>

            {/* <div className="browse">BROWSE BY</div>
            <div className="boxes">
                <div className="boxes-first">By Issue Date</div>
                <div className="boxes-middle">Authors</div>
                <div className="boxes-middle">Titles</div>
                <div className="boxes-last">Subjects</div>
            </div>

            <div className="search-text">
                Search within this community and its collections:
            </div>

            <div className="search">
                <input
                    className="search-bar"
                    autocomplete="off"
                    type="search"
                />
                <div className="go-button">Go</div>
            </div> */}

            {/* <div className="collection-text">Collections in this community</div>

            <div className="arbri-text">ARBRI DAY 2012</div>

            <div className="collection-text">Recent Submissions</div>

            <div className="arbri-text">File-naming Convention and Folder Organization Readme Template</div>

            <div className="name">Stobbs, Robyn (2022-09-17)</div>

            <div className="last-text">This is a template for a plain text readme file. It is intended as a tool for research data management to describe file-naming conventions and folder organization. The readme should be stored in the top level folder of the ...</div> */}

            <div className='form'>
                <div className="form-item">
                    <div className="browse">BROWSE BY</div>

                    {/* <input type="file" name="file" id = "logo-upload" style={{display:"none"}}/>
                    
                    <label for="logo-upload">
                        <div className='label-div'>
                            <img src = {upload_icon} alt = "add_images"/>
                            <div className='label-text'>Upload a logo</div>
                        </div>
                    </label> */}
                    {/* <img src={libraryIcon}></img> */}

                    <div className='btn-group'>
                        <button 
                            className={searchType === 1 ? "active" : ""}
                            onClick={() => changeSearchType(1)}>
                                Subcommunities and Collections
                        </button>

                        <button 
                        className={searchType === 2 ? "active" : ""}
                        onClick={() => changeSearchType(2)}>
                            Issue Date
                        </button>
                        
                        <button 
                            className={searchType === 3 ? "active" : ""}
                            onClick={() => changeSearchType(3)}>
                                Author
                        </button>

                        <button 
                            className={searchType === 4 ? "active" : ""}
                            onClick={() => changeSearchType(4)}>
                                Title
                        </button>

                        <button  
                            className={searchType === 5 ? "active" : ""}
                            onClick={() => changeSearchType(5)}>
                                Subject
                        </button>
                    </div>
                </div>
                
                {searchType === 1 &&
                    <>
                        <div className='form-item'>
                            <div className='title'>
                                <div className='text'>
                                    Communities of this Community
                                </div>
                            </div>

                            <div className='show-text'>
                                Now showing 1 - 1 of 1
                            </div>

                            {communities.map((community) => {
                                return(
                                    <div className='show-item'>
                                        <a href="personas">personas</a>
                                    </div>
                                )
                            })}
                        </div>

                        <div className='form-item'>
                            <div className='title'>
                                <div className='text'>
                                    Collections of this Community
                                </div>
                            </div>

                            <div className='show-text'>
                                Now showing 1 - 1 of 1
                            </div>

                            {collections.map((collection) => {
                                return(
                                    <div className='show-item'>
                                        <a href="personas">personas</a>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                }

                {searchType === 2 &&
                    <>
                        <div className='form-item'>
                            <div className='text'>
                                Filter results by year or month
                            </div>

                            <div className='select-group'>
                                <select className='dropdown'>
                                    <option value="0">(Choose year)</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>

                                <select className='dropdown'>
                                    <option value="0">(Choose month)</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>

                                <div className='filter-button'>
                                    <div className='text-btn'>
                                        <p>Filter results by date</p>
                                    </div>

                                    <div className='icon-btn'>
                                        <img src = {book}/>
                                        <p>Browse</p>
                                    </div>
                                </div>
                            </div>


                            <div className='show-text'>
                                Now showing 1 - 1 of 1
                            </div>
                            
                            {/* 
                            <div className='form-input'>
                                <input type = "text"></input>
                            </div> */}
                        </div>
                    </>
                }

                {/* search type = 3 */}
                {searchType === 3 &&
                <>
                    <div className='form-item'>
                        <div className='filter-button'>
                            <div className='text-btn'>
                                <p>Filter results by typing the first few letters</p>
                            </div>

                            <div className='icon-btn'>
                                <img src = {book}/>
                                <p>Browse</p>
                            </div>
                        </div>


                        <div className='no-result'>
                            No items to show.
                        </div>
                    </div>
                </>
                }

                {/* search type = 4 */}
                {searchType == 4 &&
                <>
                    <div className='form-item'>
                        <div className='filter-button'>
                            <div className='text-btn'>
                                <p>Filter results by typing the first few letters</p>
                            </div>

                            <div className='icon-btn'>
                                <img src = {book}/>
                                <p>Browse</p>
                            </div>
                        </div>


                        <div className='no-result'>
                            No items to show.
                        </div>
                    </div>
                </>
                }

                {/* search type = 5 */}
                {searchType == 5 &&
                <>
                    <div className='form-item'>
                        <div className='filter-button'>
                            <div className='text-btn'>
                                <p>Filter results by typing the first few letters</p>
                            </div>

                            <div className='icon-btn'>
                                <img src = {book}/>
                                <p>Browse</p>
                            </div>
                        </div>


                        <div className='no-result'>
                            No items to show.
                        </div>
                    </div>
                </>
                }
            </div>
        
        
        
        
        </div>
    );
};

export default UserCommunity;
