/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, createRef, useContext, useState } from "react";
import "./createItem.scss";
// import { Container } from "reactstrap";

// import components
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import SideMenu from "../../../components/sideMenu/SideMenu";
import CreateForm from "../../../components/createForm/CreateForm";



const CreateItem = (props) => {

    // const [createState, setCreateState] = useState(1);

    // const nextState = () => {
    //     setCreateState(createState + 1);
    // }

    return (
        <div className="admin-create-item">
            <Navbar></Navbar>

            <div className="main">
                {/* <div className="sidemenu-bg"></div> */}
                <SideMenu></SideMenu>

                <div className="main-right">
                    {/* {createState === 1 &&
                        <CreateForm
                            createType = "item"
                            // nextState = {() => nextState()}
                        >
                        </CreateForm>
                    } */}

                    <CreateForm
                        createType = "item"
                        // nextState = {() => nextState()}
                    >
                    </CreateForm>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default CreateItem;
