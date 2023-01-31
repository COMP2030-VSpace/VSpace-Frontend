import "./userDetailItem.scss";

import thumb from "../../assets/admin/thumbnail.png";
import info from "../../assets/admin/info.png";

import Button from "../button/Button";
import { useContext, useEffect, useState, useRef } from "react";

import { ItemContext } from "../../contexts/ItemContext";

const UserDetailItem = (props) => {
    const myRef = useRef(null)

    const data = props.item["_embedded"].indexableObject.metadata;
    // console.log(props.item);

    const [thumbnail, setThumbnail] = useState("");

    const [file, setFile] = useState("");

    const { getThumbnail, getBundles, getBitstreams } = useContext(ItemContext);

    // console.log(data);
    useEffect(() => {
        const getItemThumbnail = async () => {
            // console.log(props.item);
            const itemId = props.item["_embedded"].indexableObject.uuid;
            const response = await getThumbnail(itemId);

            // console.log(response);
            setThumbnail(response.data["_links"].content.href);

        }

        const getItemBitstreams = async () => {
            const itemId = props.item["_embedded"].indexableObject.uuid;
            const response = await getBundles(itemId);

            // console.log(response);
            const originalBundleId = response.data["_embedded"].bundles[0].uuid;
            const response2 = await getBitstreams(originalBundleId);

            // console.log(response2);
            setFile(response2.data["_embedded"].bitstreams[0])
        }


        getItemThumbnail();
        getItemBitstreams();

        myRef.current.scrollIntoView({ block: 'start',  behavior: 'smooth' });
    }, [])

    return (
        <div className="user-detail-item">
            {/* <h2 className="heading">
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
                {data["dc.title"][0].value}
            </h2> */}

            <div className='heading' ref={myRef}>
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

                    handleClick = {() => props.backHome("item")}
                ></Button>

                <h2>
                    {data["dc.title"][0].value}
                </h2>
            </div>

            <div className="wrapper-2">
                <div className="left-left">
                    <img src={thumbnail} alt="Thumbnail" />
                    <div className="small-header">Files</div>
                    <div className="links">
                        {file !== "" && <a href={file["_links"].content.href} target="_blank" rel="noreferrer">{file.metadata["dc.title"][0].value}</a>}
                    </div>
                    <div className="small-header">Date</div>
                    <div className="small-header-content">2020 - 10 - 17</div>
                    <div className="small-header">Authors</div>
                    <div className="small-header-content">
                        {data["dc.contributor.author"].map((author, idx) => {
                            if(idx !== data["dc.contributor.author"].length - 1){
                                return <span>{author.value}, </span>
                            }

                            return <span>{author.value}</span>
                        })}
                    </div>
                    
                    <div className="small-header">Publisher</div>
                    <div className="small-header-content">{data["dc.publisher"][0].value}</div>
                </div>
                <div className="left-right">
                    <div className="small-header">Abstract</div>

                    <div className="small-header-content">{data["dc.description.abstract"][0].value}</div>

                    <div className="small-header">Description</div>

                    <div className="small-header-content">{data["dc.description"][0].value}</div>

                    <div className="small-header">Citation</div>

                    <div className="small-header-content">{data["dc.identifier.citation"][0].value}</div>

                    {/* <div className="small-header">URI</div>
                    <div className="links">
                        {data["dc.identifier.uri"][0].value}
                    </div> */}

                    <div className="small-header">URL</div>
                    
                    <div className="links">
                        {data["dc.identifier.uri"][0].value.split("handle")[0] + "item/" + props.item["_embedded"].indexableObject.uuid}
                    </div>

                    <div className="small-header">Collections</div>

                    <div className="links">lmao</div>

                    <div className="last-item">
                        <img src={info} alt="" />
                        <p>Full item page</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetailItem;
