/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './itemView.scss';

// import assets
import upload_icon from "../../assets/upload/upload.png";
import save_icon from "../../assets/save/save.png";
import arrow_left_icon from "../../assets/arrows/left.png";
import thumb from "../../assets/admin/thumbnail.png";
import book from "../../assets/admin/book.png";
import info from "../../assets/admin/info.png";

// import components;
import Button from '../button/Button';
import CommunityItem from '../communityItem/CommunityItem';


// import enums
import { ItemViewType } from '../../enums/enum';
import { ButtonGroup } from 'reactstrap';

const ItemView = (props)=>{

    const [itemViewType, setItemViewType] = useState(ItemViewType.GENERAL);
    const [searchType, setSearchType] = useState(2);

    const moveToDetail = () => {
        setItemViewType(ItemViewType.DETAIL);
        return;
    }

    const backToGeneral = () => {
        setItemViewType(ItemViewType.GENERAL);
        return;
    }

    const changeSearchType = (type) => {
        setSearchType(type);
        return;
    }


    if(itemViewType === ItemViewType.GENERAL){
        return(
            <div className = 'item-view general'>
                {/* Thao starts here */}

                <div className='header'>
                    <div className='text'>College of Engineering & Computer Science</div>
                    <div className='description'>Permanent URI for this community <a href="https://vinspace.online/handle/123456789/1">https://vinspace.online/handle/123456789/1</a> </div>
                </div>

                <div className='form'>
                    <div className="form-item">
                        <div className='text'>
                            Browse
                        </div>

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
                                By Issue Date
                            </button>
                            
                            <button 
                                className={searchType === 3 ? "active" : ""}
                                onClick={() => changeSearchType(3)}>
                                    By Author
                            </button>

                            <button 
                                className={searchType === 4 ? "active" : ""}
                                onClick={() => changeSearchType(4)}>
                                    By Title
                            </button>

                            <button  
                                className={searchType === 5 ? "active" : ""}
                                onClick={() => changeSearchType(5)}>
                                    By Subject
                            </button>
                        </div>
                    </div>
                    
                    {searchType === 1 &&
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
                
                {/* search type = 1 */}

                {searchType === 2 &&
                    <>
                        <div className='bottom'>
                            <div className='item'>
                                <div className='item-content'>
                                    <div className="thumb">
                                        <img src= {thumb} alt="Thumbnail"/>
                                    </div>

                                    <div className='thumb-info'>
                                        <div className="tag">
                                            <span className="tag1">datafile.listelement.badge</span>
                                            <span className="tag2">Open Access</span>
                                            </div>

                                        <div className="item-header">
                                            <p>TITLE TOP-LEVEL TEST SAMPLE</p>
                                        </div>

                                        <div className="item-sub">
                                            <p>(VinSpace, 2022-11-15) Doe, John</p>
                                        </div>

                                        <div className="item-main">
                                            <div className="content">
                                                Este trabajo se propone elaborar un paradigma diferencial o auto-diferencial no-dualista, 
                                                respecto del cual la identidad femenina funcione como arquetipo de la existencia. 
                                                En efecto, si la identidad femenina expresa la diferencia absoluta, 
                                                lo hace por su capacidad autodiferenciante, o bien, por su energía
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }

                {/* search type = 3 */}
                {searchType === 3 &&
                    <>
                    <div className='bottom'>
                        <div className='test'>
                            Test
                        </div>
                    </div>
                    </>
                }

                {/* search type = 4 */}
                {searchType === 4 &&
                    <>
                    <div className='bottom'>
                        <div className='test'>
                            Test
                        </div>
                    </div>
                    </>
                }

                {/* search type = 5 */}
                {searchType === 5 &&
                    <>
                    <div className='bottom'>
                        <div className='test'>
                            Test
                        </div>
                    </div>
                    </>
                }

                

                {/* <div className='form-submit'>
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
                </div> */}



                {/* Thao ends here */}
            </div>
        );
    }
    else if(itemViewType === ItemViewType.DETAIL){
        return(
            <div className = 'item-view detail'>
                {/* Thao starts here */}
                <div className='header-detail'>
                    <div className='text'>Test Title</div>
                </div>

                <div className='detail'>
                    <div className='left'>
                        <img src= {thumb} alt="Thumbnail"/>

                        <div className='item-detail'>
                            <div className='item-header'>Files</div>
                            <div className='item-content'><a href='ample-social-white-01.jpeg (59.61 KB)'>ample-social-white-01.jpeg (59.61 KB)</a></div>
                        </div>

                        <div className='item-detail'>
                            <div className='item-header'>Date</div>
                            <div className='item-content'>2020 - 10 - 17</div>
                        </div>

                        <div className='item-detail'>
                            <div className='item-header'>Authors</div>
                            <div className='item-content'>Tuan</div>
                        </div>

                        <div className='item-detail'>
                            <div className='item-header'>Publisher</div>
                            <div className='item-content'>Test publisher</div>
                        </div>
                    </div>

                    <div className='right'>
                        <div className='item-detail'>
                            <div className='item-header'>Abstract</div>
                            <div className='item-content'>Test abstract</div>
                        </div>

                        <div className='item-detail'>
                            <div className='item-header'>Description</div>
                            <div className='item-content'>Test description</div>
                        </div>

                        <div className='item-detail'>
                            <div className='item-header'>Citation</div>
                            <div className='item-content'>APA</div>
                        </div>

                        <div className='item-detail'>
                            <div className='item-header'>URI</div>
                            <div className='item-content'><a href ='https://vinspace.online/handle/1224534543/7'>https://vinspace.online/handle/1224534543/7</a></div>
                        </div>

                        <div className='item-detail'>
                            <div className='item-header'>Collections</div>
                            <div className='item-content'><a href ='lmao'>lmao</a></div>
                        </div>

                        <div className='info-btn'>
                            <img src = {info}/>
                            <p>Full item page</p>
                        </div>
                    </div>

                </div>

                {/* Thao ends here */}
            </div>
        );
    }
}

export default ItemView;