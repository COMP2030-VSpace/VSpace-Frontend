import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import { userRole } from "../../enums/enum";
import Cookies from 'js-cookie';


const Auth = ({ children }) => {

    let isAuthenticated = (Cookies.get("role") && (Cookies.get("role")  !== userRole.USER));
    

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }
    return children;
};
export default Auth;