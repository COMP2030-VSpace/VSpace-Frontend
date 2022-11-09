import "./navbarFooterItem.scss";

// import assets
import dropdown from "../../assets/navbar/Polygon 4.png";

const NavbarFooterItem = (props) => {

    const moveTo = (page) => {
        window.location.href = page;
    };

    return (
        <div className="navbar-footer-content">
            <div className="wrapper">
                <div>
                    <span>{props.content}</span>
                </div>

                <div>
                    <img src={dropdown} alt ='dropdown-arrow'/>
                </div>
            </div>

            <div className="dropdown-menu">
                <ul>
                    {props.items.map((item) => (
                        <li onClick={() => moveTo(item.link)}>{item.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default NavbarFooterItem;