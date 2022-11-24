import "./communityItem.scss";

const CommunityItem = (props) => {

    return(
        <div className = "community-item" onClick={props.handleClick}>
            <div className="title">Home</div>
            <div className="code item-row">U0J7</div>
            <div className="description item-row">This repository is useful for researchers and students.</div>
        </div>
    )
}

export default CommunityItem;