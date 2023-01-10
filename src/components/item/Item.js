/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './item.scss';

// import assets
// import search_icon from "../../../assets/search/search.png";

// import components;

const Item = (props)=>{
    return(
        <div className = 'recent-item mb3'>
            <div className='title mb1' onClick={props.handleOnClick}>File-naming Convention and Folder Organization Readme Template</div>
            <div className='author mb1'>Stobbs, Robyn (2022-09-17)</div>
            <div className='abstract'>This is a template for a plain text readme file. It is intended as a tool for research data management to describe file-naming conventions and folder organization. The readme should be stored in the top level folder of the ...</div>
        </div>
    );
}

export default Item;