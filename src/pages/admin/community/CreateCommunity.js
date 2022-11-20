/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, createRef, useContext, useState } from "react";
import "./createCommunity.scss";
// import { Container } from "reactstrap";

// import components
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import SideMenu from "../../../components/sideMenu/SideMenu";
import Banner from "../../../components/banner/Banner";
import CreateForm from "../../../components/createForm/CreateForm";



const CreateCommunity = (props) => {

    const [createState, setCreateState] = useState(1);

    return (
        <div className="admin-create-community">
            <Navbar></Navbar>

            <div className="main">
                {/* <div className="sidemenu-bg"></div> */}
                <SideMenu></SideMenu>

                <div className="main-right">
                    {createState === 1 &&
                        <CreateForm
                            createType = "community"
                        >
                        </CreateForm>
                    }
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default CreateCommunity;
