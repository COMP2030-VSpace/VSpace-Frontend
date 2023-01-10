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


const CreateForm = (props)=>{


    const { createCommunity } = useContext(CommunityContext);

    const [createState, setCreateState] = useState(1);
    const [topLevelTitle, setTopLevelTitle] = useState("");
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            console.log(searchValue)
            // Send Axios request here
            }, 2000)

            return () => clearTimeout(delayDebounceFn)
    }, [searchValue])

    const nextCreateState = () => {
        setCreateState(createState + 1);
        return;
    }

    const lastCreateState = () => {
        setCreateState(createState - 1);
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

    }

    const submitForm = async () => {
        // verify input

        // 

        const data = {
            "name": topLevelTitle,
            "metadata": {
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

        const response = await createCommunity(data);

        console.log(response);
        
        // redirect to home
        if(response.data.success){
            window.location.href = "/admin";
        }


    }


    if(createState === 1){
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

                                handleClick = {() => nextCreateState()}
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
                            <CommunityItem></CommunityItem>

                            <CommunityItem></CommunityItem>

                            <CommunityItem></CommunityItem>
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
                                <input type = "text" placeholder='Search for a community'></input>
                            </div>
                        </div>

                        <div className='community-list'>
                            <CommunityItem handleClick = {() => nextCreateState()}></CommunityItem>

                            <CommunityItem handleClick = {() => nextCreateState()}></CommunityItem>

                            <CommunityItem handleClick = {() => nextCreateState()}></CommunityItem>
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
                                <input type = "text" placeholder='Search for an item'></input>
                            </div>
                        </div>

                        <div className='community-list'>
                            <CommunityItem handleClick = {() => nextCreateState()}></CommunityItem>

                            <CommunityItem handleClick = {() => nextCreateState()}></CommunityItem>

                            <CommunityItem handleClick = {() => nextCreateState()}></CommunityItem>
                        </div>
                        {/* Thao ends here */}
                    </>
                }
            </div>
        );
    }
    else if(createState === 2){
        return(
            <div className = 'create-form-2'>
                {props.createType === "community" &&
                    <>
                        <div className='header'>
                            <div className='text'>Create a community</div>
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

                                handleClick = {() => submitForm()}
                            ></Button>
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
                        nextCreateState = {nextCreateState}
                        lastCreateState = {lastCreateState}
                    ></FormItem>
                }
            </div>
        );
    }
}

export default CreateForm;