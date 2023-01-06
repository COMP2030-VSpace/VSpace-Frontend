/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './formItem.scss';

// import assets
import upload_icon from "../../assets/upload/upload.png";
import plusblack from "../../assets/admin/plus-black.png";
import polygon from '../../assets/admin/Polygon.png';
import uparrow from "../../assets/admin/up-arrow-admin.png";
import plusimg from "../../assets/admin/plus.png";
import trash from "../../assets/admin/trash-can.png";
import pluswhite from "../../assets/admin/plus-white.png";
import check from '../../assets/admin/check.png';
import save_icon from "../../assets/save/save.png";

// import components;
import Button from '../button/Button';

const FormItem = (props) => {
    return(
        <>
            {/* Thao starts here */}
            <div className='header'>
                <div className='text'>Create an Item</div>
            </div>

            <div className='form'>
                <div className="form-item">
                    <div className='text'>
                    </div>

                    <input type="file" name="file" id = "logo-upload" style={{display:"none"}}/>
                    
                    <label for="logo-upload">
                        <div className='label-div'>
                            <img src = {upload_icon} alt = "add_images"/>
                            <div className='label-text'>Drop files to attach them to the item, or browse</div>
                        </div>
                    </label>
                    {/* <img src={libraryIcon}></img> */}
                </div>

                <div className='button-group'>
                    <div className='left'>
                        <button className="collection">Collection</button>

                        <button className="more">
                            B.Lib l.sc
                            <img src={polygon} height="10px"/>
                        </button>
                    </div>

                    <div className='right'>
                        <button className='add-more'>
                            Add more
                            <img src={plusblack} height="16px"/>
                        </button>                                   
                    </div>
                </div>

                <div className="divider">
                    <div className='content'>
                        <p>Describe</p>
                    </div>

                    <div className='image'>
                        <img src={uparrow}/>
                    </div>
                </div>

                <div className='form-item'>
                    <div className='text'>
                        Author
                    </div>

                    <div className='form-input-remove'>
                        <div className='form-input'>
                            <input type = "text" placeholder='Author'></input>
                        </div>

                        <label for="text-button" className="remove-button">
                            <img src={trash}/>
                        </label>
                    </div>

                    <div className='description'>
                        Enter the author’s name (Family name, Given names).
                    </div>

                    <label for="text-button" className="add-more-button">
                        <img src={plusimg}/>
                        <p>Add more</p>
                    </label>
                </div>

                <div className='form-item'>
                    <div className='text'>
                        Title *
                    </div>

                    <div className='form-input'>
                        <input type = "text" placeholder='Title'></input>
                    </div>

                    <div className='description'>
                        Enter the main title of the item.
                    </div>
                </div>

                <div className='form-item'>
                    <div className='text'>
                        Other Titles
                    </div>

                    <div className='form-input-remove'>
                        <div className='form-input'>
                            <input type = "text" placeholder='Other titles'></input>
                        </div>

                        <label for="text-button" className="remove-button">
                            <img src={trash}/>
                        </label>
                    </div>


                    <div className='description'>
                        If the item has any alternative titles, please enter them here.
                    </div>

                    <label for="text-button" className="add-more-button">
                        <img src={plusimg}/>
                        <p>Add more</p>
                    </label>
                </div>

                <div className='input-group'>
                    <div className='form-item-left'>
                        <div className='text'>
                            Date of Issue *
                        </div>

                        <div className='date-input'>
                            <div className='year'>
                                <input type = "text" placeholder='Year'></input>
                            </div>

                            <div className='month'>
                                <input type = "text" placeholder='Month'></input>
                            </div>

                            <div className='day'>
                                <input type = "text" placeholder='Day'></input>
                            </div>
                        </div>
                        
                        {/* <form className='date-selector'>
                            <div className='selector'>
                                <div className='text'>
                                    Year
                                </div>
                                <select name="year" id="year">Year:</select>
                            </div>

                            <div className='selector'>
                                <div className='text'>
                                    Month
                                </div>
                                <select name="month" id="month"></select>
                            </div>

                            <div className='selector'>
                                <div className='text'>
                                    Day
                                </div>
                                <select name="day" id="day"></select>
                            </div>
                        </form> */}
                        
                        <div className='description'>
                            Enter the name of the publisher of the previously issued instance of this item.
                        </div>
                    </div>

                    <div className='form-item'>
                        <div className='text'>
                            Publisher
                        </div>

                        <div className='form-input'>
                            <input type = "text"></input>
                        </div>

                        <div className='description'>
                            Enter the name of the publisher of the previously issued instance of this item.
                        </div>
                    </div>
                </div>

            
                <div className='form-item'>
                    <div className='text'>
                        Citation
                    </div>

                    <div className='form-input'>
                        <input type = "text" placeholder='Citation'></input>
                    </div>

                    <div className='description'>
                        Enter the standard citation for the previously issued instance of this item.
                    </div>
                </div>

                <div className='form-item'>
                    <div className='text'>
                        Series/Report No.
                    </div>

                    <div className='form-input-remove'>
                        <div className='form-input'>
                            <div className='series'>
                                <input type = "text" placeholder='Series'></input>
                            </div>

                            <div className='report'>
                                <input type = "text" placeholder='Report No.'></input>
                            </div>
                        </div>

                        <label for="text-button" className="remove-button">
                            <img src={trash}/>
                        </label>
                    </div>

                    <div className='description'>
                        Enter the series and number assigned to this item by your community.
                    </div>

                    <label for="text-button" className="add-more-button">
                        <img src={plusimg}/>
                        <p>Add more</p>
                    </label>
                </div>

                <div className='form-item'>
                    <div className='text'>
                        Identifiers
                    </div>

                    <div className='form-input-remove'>
                        <div className='form-input'>
                            <select className='select'>
                                <option value="issn">ISSN</option>
                                <option value="issn1">issn1</option>
                                <option value="issn2">issn2</option>
                                <option value="issn3">issn3</option>
                            </select>
                            
                            
                            <div className='identifiers'>
                                <input type = "text" placeholder='Identifiers.'></input>
                            </div>
                        </div>

                        <label for="text-button" className="remove-button">
                            <img src={trash}/>
                        </label>
                    </div>


                    <label for="text-button" className="add-more-button">
                        <img src={plusimg}/>
                        <p>Add more</p>
                    </label>
                </div>

                <div className='form-item'>
                    <div className='text'>
                        Type
                    </div>

                    <div className='form-input-remove'>
                        <div className='form-input'>
                            <select className='type-select'>
                                <option value="type">Type</option>
                                <option value="type1">type1</option>
                                <option value="type2">type2</option>
                                <option value="type3">type3</option>
                            </select>
                        </div>

                        <label for="text-button" className="remove-button">
                            <img src={trash}/>
                        </label>
                    </div>

                    <div className='description'>
                        Select the type of content of the item.
                    </div>

                    <label for="text-button" className="add-more-button">
                        <img src={plusimg}/>
                        <p>Add more</p>
                    </label>
                </div>

                <div className='form-item'>
                    <div className='text'>
                        Language
                    </div>

                    <div className='form-input-remove'>
                        <div className='form-input'>
                            <select className='type-select'>
                                <option value="language">Language</option>
                                <option value="language1">language1</option>
                                <option value="language2">language2</option>
                                <option value="language3">language3</option>
                            </select>
                        </div>

                        <label for="text-button" className="remove-button">
                            <img src={trash}/>
                        </label>
                    </div>


                    <div className='description'>
                        Select the language of the main content of the item. If the language does not appear in the list, 
                        please select 'Other'. If the content does not really have a language (for example, if it is a dataset or an image) 
                        please select 'N/A'.
                    </div>
                </div>

                <div className="divider">
                    <div className='content'>
                        <p>Describe</p>
                    </div>

                    <div className='image'>
                        <img src={uparrow}/>
                    </div>
                </div>

                <div className='subject-key1'>
                    Subject Keywords
                </div>

                <div className='subject-key2'>
                    Subject Keywords
                </div>

                <div className='form-item'>
                    <div className='text'>
                        Abstract
                    </div>

                    <div className='form-input'>
                        <textarea placeholder='Abstract'></textarea>
                    </div>

                    <div className='description'>
                        Enter the abstract of the item.
                    </div>
                </div>

                <div className='form-item'>
                    <div className='text'>
                        Sponsors
                    </div>

                    <div className='form-input'>
                        <textarea placeholder='Sponsors'></textarea>
                    </div>

                    <div className='description'>
                        Enter the names of any sponsors and/or funding codes in the box.
                    </div>
                </div>
                
                <div className='form-item'>
                    <div className='text'>
                        Description
                    </div>

                    <div className='form-input'>
                        <textarea placeholder='Description'></textarea>
                    </div>

                    <div className='description'>
                        Enter any other description or comments in this box.
                    </div>
                </div>

                <div className="divider">
                    <div className='content'>
                        <p>Deposit license</p>
                    </div>

                    <div className = 'image'>
                        <img src={uparrow}/>
                    </div>
                </div>

                <div className='note'>
                    NOTE: PLACE YOUR OWN LICENSE HERE This sample license is provided for informational purposes only. 
                    NON-EXCLUSIVE DISTRIBUTION LICENSE By signing and submitting this license, you (the author(s) or copyright owner) grants to DSpace University (DSU) the non-exclusive right to reproduce, 
                    translate (as defined below), and/or distribute your submission (including the abstract) worldwide in print and electronic format and in any medium, including but not limited to audio or video. 
                    You agree that DSU may, without changing the content, translate the submission to any medium or format for the purpose of preservation. You also agree that DSU may keep more than one copy of this submission for purposes of security, 
                    back-up and preservation. You represent that the submission is your original work, and that you have the right to grant the rights contained in this license. You also represent that your submission does not, to the best of your knowledge, 
                    infringe upon anyone's copyright. If the submission contains material for which you do not hold copyright, you represent that you have obtained the unrestricted permission of the copyright owner to grant DSU the rights required by this license, 
                    and that such third-party owned material is clearly identified and acknowledged within the text or content of the submission. IF THE SUBMISSION IS BASED UPON WORK THAT HAS BEEN SPONSORED OR SUPPORTED BY AN AGENCY OR ORGANIZATION OTHER THAN DSU, 
                    YOU REPRESENT THAT YOU HAVE FULFILLED ANY RIGHT OF REVIEW OR OTHER OBLIGATIONS REQUIRED BY SUCH CONTRACT OR AGREEMENT. 
                    DSU will clearly identify your name(s) as the author(s) or owner(s) of the submission, and will not make any alteration, other than as allowed by this license, to your submission.
                </div>

                <div className='checkbox'>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                    <label for="vehicle1"> I confirm the license above</label><br></br>
                </div>
            </div>

            <div className='form-submit'>
                <div className='form-submit-left'>
                    <Button 
                        styles = {{
                            "height": "2.6rem",
                            "width": "7rem",
                            "background": "#CD3C3F",
                            "margin-right": "0",
                            "margin-bottom": "0",
                            "color": "#ffffff"
                        }}

                        content = "Discard"
                        icon = {trash}

                        handleClick = {() => props.nextCreateState()}
                    ></Button>
                </div>

                <span class="dot">
                    <img src={check}/>
                </span>
                <p className='text'>Saved</p>
                
                <Button 
                    styles = {{
                        "height": "2.6rem",
                        "width": "7rem",
                        "background": "#828282",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "color": "#ffffff",
                        // "id": "saved",
                        // "onClick": "myDonn()",
                    }}

                    content = "Save"
                    icon = {save_icon}

                    handleClick = {() => props.nextCreateState()}
                ></Button>

            <Button 
                    styles = {{
                        "height": "2.6rem",
                        "width": "7rem",
                        "background": "#2E5288",
                        "margin-right": "1rem",
                        "margin-bottom": "0",
                        "color": "#FFFFFF",
                        "border": "1.5px solid #000000",
                        "margin-left": "1.8rem",
                    }}

                    content = "Deposit"
                    icon = {pluswhite}
                    

                    handleClick = {() => props.lastCreateState()}
                ></Button>

            </div>
            {/* Thao starts here */}
        </>
    );
}

export default FormItem;