import "./communityItem.scss";

const CommunityItem = (props) => {
    const data = props.data;
    return(
        <div className = "community-item" onClick={props.handleClick}>
            <div className="title">Home</div>
            <div className="code item-row">{data.metadata["dc.title"][0].value}</div>
            <div className="description item-row">This repository is useful for researchers and students.</div>
        </div>
    )
}

export default CommunityItem;