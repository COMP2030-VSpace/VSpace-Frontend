/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import './item.scss';

// import assets
// import search_icon from "../../../assets/search/search.png";

// import components;

const Item = (props)=>{
    return(
        <div className = 'recent-item mb3'>
            <div className='title mb1'>{props.data.metadata["dc.title"][0].value}</div>
            <div className='author mb1'>
                {props.data.metadata["dc.contributor.author"].map((author, idx) => {
                    return <>{author.value}{idx === props.data.metadata["dc.contributor.author"].length - 1 ? " " : ", "}</>
                })}
                (2022-09-17)
            </div>
            <div className='abstract'>{props.data.metadata["dc.description.abstract"][0].value}</div>
        </div>
    );
}

export default Item;