/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './createForm.scss';

// import assets
// import sample_banner from "../../assets/sample/banner/banner.png";

// import components;
import Button from '../button/Button';
import CommunityItem from '../communityItem/CommunityItem';

const CreateForm = (props)=>{

    const [createState, setCreateState] = useState(1);

    const nextCreateState = () => {
        setCreateState(createState + 1);
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
                                <input type = "text" placeholder='Full Name'></input>
                            </div>
                        </div>

                        <div className='community-list'>
                            <CommunityItem></CommunityItem>

                            <CommunityItem></CommunityItem>

                            <CommunityItem></CommunityItem>
                        </div>
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
                                <input type = "text" placeholder='Full Name'></input>
                            </div>
                        </div>

                        <div className='community-list'>
                            <CommunityItem></CommunityItem>

                            <CommunityItem></CommunityItem>

                            <CommunityItem></CommunityItem>
                        </div>
                    </>
                }
            </div>
        );
    }
}

export default CreateForm;