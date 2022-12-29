/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, createRef, useContext, useState } from "react";
import "./importBatch.scss";
// import { Container } from "reactstrap";

// import components
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import SideMenu from "../../../components/sideMenu/SideMenu";
import ImportForm from "../../../components/importForm/ImportForm";




const ImportMetaData = (props) => {
    return (
        <div className="admin-import-batch">
            <Navbar></Navbar>

            <div className="main">
                <SideMenu></SideMenu>

                <div className="main-right">
                    <ImportForm
                        importType = "batch"
                    ></ImportForm>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ImportMetaData;
