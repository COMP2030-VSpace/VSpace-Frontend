/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, createRef, useContext, useState } from "react";
import "./community.scss";
// import { Container } from "reactstrap";

// import components
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import SideMenu from "../../../components/sideMenu/SideMenu";
import CreateForm from "../../../components/createForm/CreateForm";



const Community = (props) => {

    // const [createState, setCreateState] = useState(1);

    // const nextState = () => {
    //     setCreateState(createState + 1);
    // }

    return (
        <div className="admin-community">
            <Navbar></Navbar>

            <div className="main">
                <SideMenu></SideMenu>

                <div className="main-right">
                    
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Community;
