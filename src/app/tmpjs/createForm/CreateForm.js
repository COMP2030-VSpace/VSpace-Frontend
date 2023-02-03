/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './createForm.scss';

// import assets
import upload_icon from "../../assets/upload/upload.png";
import save_icon from "../../assets/save/save.png";
import arrow_left_icon from "../../assets/arrows/left.png";
import plusimg from "../../assets/admin/plus.png";
import uparrow from "../../assets/admin/up-arrow-admin.png";
import trash from "../../assets/admin/trash-can.png";
import pluswhite from "../../assets/admin/plus-white.png";
import plusblack from "../../assets/admin/plus-black.png"
import polygon from '../../assets/admin/Polygon.png';
import check from '../../assets/admin/check.png';

// import components;
import Button from '../button/Button';
import CommunityItem from '../communityItem/CommunityItem';
import FormItem from './FormItem';


//import context
import { CommunityContext } from '../../contexts/CommunityContext';
import { SearchContext } from '../../contexts/SearchContext';
import { CollectionContext } from '../../contexts/CollectionContext';

const CreateForm = (props)=>{


    const { createCommunity, getCommunities, createSubCommunity } = useContext(CommunityContext);
    const { getAllCollections } = useContext(CollectionContext);
    const { searchCommunity } = useContext(SearchContext);

    const [createState, setCreateState] = useState("begin");
    const [topLevelTitle, setTopLevelTitle] = useState("");
    const [intro, setIntro] = useState("");
    const [description, setDescription] = useState("");
    const [right, setRight] = useState("");
    const [news,setNews] = useState("");

    const [communities, setCommunities] = useState([]);
    const [collections, setCollections] = useState([]);

    const [searchValue, setSearchValue] = useState('');

    const [topCommunity, setTopCommunity] = useState("");
    const [parentCollection, setParentCollection] = useState("");

    const itemsPerPage = 25;

    useEffect(() => {
        const loadCommunities = async () => {
            const page = 0;
            const response = await getCommunities(page, itemsPerPage);
            const data = response.data["_embedded"].communities

            // console.log(data);

            setCommunities(data);
            
        }

        const loadCollections = async () => {
            const page = 0;
            const response = await getAllCollections(page, itemsPerPage);

            // console.log(response);
            const data = response.data["_embedded"].collections

            // console.log(data);

            setCollections(data);
            
        }

        loadCommunities();
        loadCollections();
    }, [])

    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
                console.log(searchValue)
                // Send Axios request here
                const response = await searchCommunity(searchValue);
                if(response.data.success){
                    // console.log(response.data)
                    const data = response.data["_embedded"].communities;
                    setCommunities(data);
                }
            }, 3000)

            return () => clearTimeout(delayDebounceFn)
    }, [searchValue])

    const nextCreateState = (state, parent) => {
        if(state === "sub-community"){
            console.log(parent);
            setTopCommunity(parent);
        }
        else if(state === "item"){
            console.log(parent);
            setParentCollection(parent);
        }


        setCreateState(state);
        return;
    }

    const lastCreateState = () => {
        setCreateState("begin");
        return;
    }

    const handleChange = (event, type) => {
        // console.log(event.target.value);
        if(type === "toplevel-title"){
            // console.log("debug 1");
            setTopLevelTitle(event.target.value);
        }
        else if(type === "subCommunity-title"){
            // console.log("debug 2");
            setSearchValue(event.target.value);
        }
        else if(type === "introduction"){
            // console.log("debug 2");
            setIntro(event.target.value);
        }
        else if(type === "description"){
            // console.log("debug 2");
            setDescription(event.target.value);
        }
        else if(type === "right"){
            // console.log("debug 2");
            setRight(event.target.value);
        }
        else if(type === "news"){
            // console.log("debug 2");
            setNews(event.target.value);
        }

    }

    const submitForm = async (communityType) => {
        // verify input

        // 

        const data = {
            "name": topLevelTitle,
            "metadata": {
                "dc.description": [
                    {
                        "value": description,
                        "language": null,
                        "authority": null,
                        "confidence": -1
                    }
                ],
                "dc.description.abstract": [
                    {
                        "value": intro,
                        "language": null,
                        "authority": null,
                        "confidence": -1
                    }
                ],
                "dc.description.tableofcontents": [
                    {
                        "value": news,
                        "language": null,
                        "authority": null,
                        "confidence": -1
                    }
                ],
                "dc.rights": [
                    {
                        "value": right,
                        "language": null,
                        "authority": null,
                        "confidence": -1
                    }
                ],
                "dc.title": [
                    {
                        "value": topLevelTitle,
                        "language": null,
                        "authority": null,
                        "confidence": -1
                    }
                ]
            }
        }

        let response;

        if(communityType === "top-community"){
            response = await createCommunity(data);
        } 
        else if(communityType === "sub-community"){
            response = await createSubCommunity(data, topCommunity.uuid);
        }


        console.log(response);
        
        // redirect to home
        if(response.data.success){
            window.location.href = "/admin";
        }


    }


    if(createState === "begin"){
        return(
            <div className = 'create-form'>
                {props.createType === "community" &&
                    <>
                        <div className='header'>
                            <div className='text'>New community</div>
                        </div>

                        <div className='top-level-community'>
                            <Button 
                                styles = {{
                                    "height": "2.6rem",
                                    "width": "90%",
                                    "background": "#2D5288",
                                    "margin-right": "0",
                                    "margin-bottom": "0",
                                    "color": "#ffffff"
                                }}

                                content = "Create a new top-level community"

                                handleClick = {() => nextCreateState("top-community")}
                            ></Button>
                        </div>

                        <span className="line">
                            <div className='border'><span>Or</span></div>
                        </span>

                        <div className='community-search'>
                            <div className='text'>
                                Create a new community in
                            </div>

                            <div className='form-input'>
                                <input 
                                    type = "text" 
                                    placeholder='Search for a community'
                                    value = {searchValue}
                                    onChange = {(event) => {handleChange(event, "subCommunity-title")}}
                                ></input>
                            </div>
                        </div>

                        <div className='community-list'>
                            {communities.map((community) => {
                                return <CommunityItem 
                                            data = {community}
                                            handleClick = {() => nextCreateState("sub-community", community)}
                                        ></CommunityItem>
                            })}

                        </div>
                    </>
                }


                {props.createType === "collection" &&
                    <>
                        <div className='header'>
                            <div className='text'>New collection</div>
                        </div>

                        <div className='community-search'>
                            <div className='text'>
                                Create a new collection in
                            </div>

                            <div className='form-input'>
                                <input 
                                    type = "text" 
                                    placeholder='Search for a community'
                                    value = {searchValue}
                                    onChange = {(event) => {handleChange(event, "subCommunity-title")}}
                                ></input>
                            </div>
                        </div>

                        <div className='community-list'>
                            {communities.map((community) => {
                                return <CommunityItem 
                                            data = {community}
                                            handleClick = {() => nextCreateState("sub-community", community)}
                                        ></CommunityItem>
                            })}
                        </div>
                    </>
                }


                {props.createType === "item" &&
                    <>
                        {/* Thao starts here */}
                        <div className='header'>
                            <div className='text'>New item</div>
                        </div>

                        <div className='community-search'>
                            <div className='text'>
                                Create a new item in
                            </div>

                            <div className='form-input'>
                                <input type = "text" placeholder='Search for a collection'></input>
                            </div>
                        </div>

                        <div className='community-list'>
                            {collections.map((collection) => {
                                return <CommunityItem 
                                            data = {collection}
                                            handleClick = {() => nextCreateState("item", collection)}
                                        ></CommunityItem>
                            })}
                        </div>
                        {/* Thao ends here */}
                    </>
                }
            </div>
        );
    }
    else if(createState === "top-community" || createState === "sub-community" || createState === "item"){
        return(
            <div className = 'create-form-2'>
                {props.createType === "community" &&
                    <>
                        <div className='header'>
                            {createState === "top-community" &&
                                <div className='text'>Create a community</div>
                            }

                            {createState === "sub-community" &&
                                <div className='text'>Create a Sub-Community for Community {topCommunity.metadata["dc.title"][0].value}</div>
                            }
                        </div>


                        <div className='form'>
                            <div className="form-item">
                                <div className='text'>
                                    Logo
                                </div>

                                <input type="file" name="file" id = "logo-upload" style={{display:"none"}}/>
                                
                                <label for="logo-upload">
                                    <div className='label-div'>
                                        <img src = {upload_icon} alt = "add_images"/>
                                        <div className='label-text'>Upload a logo</div>
                                    </div>
                                </label>
                                {/* <img src={libraryIcon}></img> */}
                            </div>

                            <div className='form-item'>
                                <div className='text'>
                                    Name*
                                </div>

                                <div className='form-input'>
                                    <input 
                                        type = "text"
                                        value={topLevelTitle}
                                        onChange = {(e) => handleChange(e, "toplevel-title")}
                                    ></input>
                                </div>
                            </div>

                            <div className='form-item'>
                                <div className='text'>
                                    Introductory text (HTML)
                                </div>

                                <div className='form-input'>
                                    <textarea
                                        value={intro}
                                        onChange = {(e) => handleChange(e, "introduction")}
                                    ></textarea>
                                </div>
                            </div>

                            <div className='form-item'>
                                <div className='text'>
                                    Short description
                                </div>

                                <div className='form-input'>
                                    <textarea
                                        value={description}
                                        onChange = {(e) => handleChange(e, "description")}
                                    ></textarea>
                                </div>
                            </div>

                            <div className='form-item'>
                                <div className='text'>
                                    Copyright text (HTML)
                                </div>

                                <div className='form-input'>
                                    <textarea
                                        value={right}
                                        onChange = {(e) => handleChange(e, "right")}
                                    ></textarea>
                                </div>
                            </div>

                            <div className='form-item'>
                                <div className='text'>
                                    News (HTML)
                                </div>

                                <div className='form-input'>
                                    <textarea
                                        value={news}
                                        onChange = {(e) => handleChange(e, "news")}
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <div className='form-submit'>
                            <Button 
                                styles = {{
                                    "height": "2.6rem",
                                    "width": "7rem",
                                    "background": "#ffffff",
                                    "margin-right": "1rem",
                                    "margin-bottom": "0",
                                    "color": "#000000",
                                    "border": "1.5px solid #000000",
                                }}

                                content = "Back"
                                icon = {arrow_left_icon}
                                

                                handleClick = {() => lastCreateState()}
                            ></Button>

                            {createState === "top-community" &&
                                <Button 
                                    styles = {{
                                        "height": "2.6rem",
                                        "width": "7rem",
                                        "background": "#2D5288",
                                        "margin-right": "0",
                                        "margin-bottom": "0",
                                        "color": "#ffffff"
                                    }}

                                    content = "Save"
                                    icon = {save_icon}

                                    handleClick = {() => submitForm("top-community")}
                                ></Button>
                            } 

                            {createState === "sub-community" &&
                                <Button 
                                    styles = {{
                                        "height": "2.6rem",
                                        "width": "7rem",
                                        "background": "#2D5288",
                                        "margin-right": "0",
                                        "margin-bottom": "0",
                                        "color": "#ffffff"
                                    }}

                                    content = "Save"
                                    icon = {save_icon}

                                    handleClick = {() => submitForm("sub-community")}
                                ></Button>
                            }
                            
                        </div>

                    </>
                }







                {props.createType === "collection" &&
                    <>
                        <div className='header'>
                            <div className='text'>Create a collection for Community U0J7</div>
                        </div>

                        

                        <div className='form'>
                            <div className="form-item">
                                <div className='text'>
                                    Logo
                                </div>

                                <input type="file" name="file" id = "logo-upload" style={{display:"none"}}/>
                                
                                <label for="logo-upload">
                                    <div className='label-div'>
                                        <img src = {upload_icon} alt = "add_images"/>
                                        <div className='label-text'>Upload a logo</div>
                                    </div>
                                </label>
                                {/* <img src={libraryIcon}></img> */}
                            </div>

                            <div className='form-item'>
                                <div className='text'>
                                    Name*
                                </div>

                                <div className='form-input'>
                                    <input type = "text"></input>
                                </div>
                            </div>

                            <div className='form-item'>
                                <div className='text'>
                                    Introductory text (HTML)
                                </div>

                                <div className='form-input'>
                                    <textarea></textarea>
                                </div>
                            </div>

                            <div className='form-item'>
                                <div className='text'>
                                    Short description
                                </div>

                                <div className='form-input'>
                                    <textarea></textarea>
                                </div>
                            </div>

                            <div className='form-item'>
                                <div className='text'>
                                    Copyright text (HTML)
                                </div>

                                <div className='form-input'>
                                    <textarea></textarea>
                                </div>
                            </div>

                            <div className='form-item'>
                                <div className='text'>
                                    News (HTML)
                                </div>

                                <div className='form-input'>
                                    <textarea></textarea>
                                </div>
                            </div>

                            <div className='form-item'>
                                <div className='text'>
                                    License
                                </div>

                                <div className='form-input'>
                                    <input type = "text"></input>
                                </div>
                            </div>

                            <div className='form-item'>
                                <div className='text'>
                                    Entity type
                                </div>

                                <div className='form-input'>
                                    <input type = "text"></input>
                                </div>
                            </div>
                        </div>

                        <div className='form-submit'>
                            <Button 
                                styles = {{
                                    "height": "2.6rem",
                                    "width": "7rem",
                                    "background": "#ffffff",
                                    "margin-right": "1rem",
                                    "margin-bottom": "0",
                                    "color": "#000000",
                                    "border": "1.5px solid #000000",
                                }}

                                content = "Back"
                                icon = {arrow_left_icon}
                                

                                handleClick = {() => lastCreateState()}
                            ></Button>

                            <Button 
                                styles = {{
                                    "height": "2.6rem",
                                    "width": "7rem",
                                    "background": "#2D5288",
                                    "margin-right": "0",
                                    "margin-bottom": "0",
                                    "color": "#ffffff"
                                }}

                                content = "Save"
                                icon = {save_icon}

                                handleClick = {() => nextCreateState()}
                            ></Button>
                        </div>

                    </>
                }


                {props.createType === "item" &&
                    <FormItem
                        parent = {parentCollection}
                        nextCreateState = {nextCreateState}
                        lastCreateState = {lastCreateState}
                    ></FormItem>
                }
            </div>
        );
    }
}

export default CreateForm;