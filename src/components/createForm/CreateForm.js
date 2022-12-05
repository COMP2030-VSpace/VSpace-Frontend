/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './createForm.scss';

// import assets
import upload_icon from "../../assets/upload/upload.png";
import save_icon from "../../assets/save/save.png";
import arrow_left_icon from "../../assets/arrows/left.png";

// import components;
import Button from '../button/Button';
import CommunityItem from '../communityItem/CommunityItem';

const CreateForm = (props)=>{

    const [createState, setCreateState] = useState(1);

    const nextCreateState = () => {
        setCreateState(createState + 1);
        return;
    }

    const lastCreateState = () => {
        setCreateState(createState - 1);
        return;
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
                                <input type = "text" placeholder='Search for a community'></input>
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
                    <>
                        {/* Thao starts here */}
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
                        {/* Thao starts here */}
                    </>
                }
            </div>
        );
    }
}

export default CreateForm;