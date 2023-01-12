import "./userDetailItem.scss";

import thumb from "../../assets/admin/thumbnail.png";
import info from "../../assets/admin/info.png";

const UserDetailItem = (props) => {
    return (
        <div className="user-detail-item">
            <h2 className="heading">
                Mystical experience and global revolution
            </h2>

            <div className="wrapper-2">
                <div className="left-left">
                    <img src={thumb} alt="Thumbnail" />
                    <div className="small-header">Files</div>
                    <div className="links">
                        ample-social-white-01.jpeg (59.61 KB)
                    </div>
                    <div className="small-header">Date</div>
                    <div className="small-header-content">2020 - 10 - 17</div>
                    <div className="small-header">Authors</div>
                    <div className="small-header-content">Tuan</div>
                    <div className="small-header">Publisher</div>
                    <div className="small-header-content">Test Publisher</div>
                </div>
                <div className="left-right">
                    <div className="small-header">Abstract</div>

                    <div className="small-header-content">Test abstract</div>

                    <div className="small-header">Description</div>

                    <div className="small-header-content">Test description</div>

                    <div className="small-header">Citation</div>

                    <div className="small-header-content">APA</div>

                    <div className="small-header">URI</div>
                    <div className="links">
                        https://vinspace.online/handle/1224534543/7
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
