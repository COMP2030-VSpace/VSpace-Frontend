import "./userCommunity.scss";

const UserCommunity = (props) => {
    return (
        <div className="user-community">
            <h2 className="heading">
                Athabasca River Basin Research Institute
            </h2>

            <div className="browse">BROWSE BY</div>
            <div className="boxes">
                <div className="boxes-first">By Issue Date</div>
                <div className="boxes-middle">Authors</div>
                <div className="boxes-middle">Titles</div>
                <div className="boxes-last">Subjects</div>
            </div>

            <div className="search-text">
                Search within this community and its collections:
            </div>

            <div className="search">
                <input
                    className="search-bar"
                    autocomplete="off"
                    type="search"
                />
                <div className="go-button">Go</div>
            </div>

            <div className="collection-text">Collections in this community</div>

            <div className="arbri-text">ARBRI DAY 2012</div>

            <div className="collection-text">Recent Submissions</div>

            <div className="arbri-text">File-naming Convention and Folder Organization Readme Template</div>

            <div className="name">Stobbs, Robyn (2022-09-17)</div>

            <div className="last-text">This is a template for a plain text readme file. It is intended as a tool for research data management to describe file-naming conventions and folder organization. The readme should be stored in the top level folder of the ...</div>
        </div>
    );
};

export default UserCommunity;
