import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import { userRole } from "../../enums/enum";
import Cookies from 'js-cookie';


const BeforeLogin = ({ children }) => {

    let isLogin = (Cookies.get("role")  !== userRole.USER);
    

    if (isLogin) {
        return <Navigate to="/" replace />;
    }
    return children;
};
export default BeforeLogin;