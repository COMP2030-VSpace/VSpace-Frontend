/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './itemView.scss';

// import assets
import upload_icon from "../../assets/upload/upload.png";
import save_icon from "../../assets/save/save.png";
import arrow_left_icon from "../../assets/arrows/left.png";

// import components;
import Button from '../button/Button';
import CommunityItem from '../communityItem/CommunityItem';

// import enums
import { ItemViewType } from '../../enums/enum';

const ItemView = (props)=>{

    const [itemViewType, setItemViewType] = useState(ItemViewType.GENERAL);

    const moveToDetail = () => {
        setItemViewType(ItemViewType.DETAIL);
        return;
    }

    const backToGeneral = () => {
        setItemViewType(ItemViewType.GENERAL);
        return;
    }


    if(itemViewType === ItemViewType.GENERAL){
        return(
            <div className = 'item-view general'>
                {/* Thao starts here */}



                {/* Resoures, can reuse */}
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
                        

                        handleClick = {() => backToGeneral()}
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

                        handleClick = {() => moveToDetail()}
                    ></Button>
                </div>



                {/* Thao ends here */}
            </div>
        );
    }
    else if(itemViewType === ItemViewType.DETAIL){
        return(
            <div className = 'item-view detail'>
                {/* Thao starts here */}


                {/* Thao ends here */}
            </div>
        );
    }
}

export default ItemView;