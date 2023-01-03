import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import { userRole } from "../../enums/enum";
import Cookies from 'js-cookie';


const Protected = ({ children }) => {

    let isAuthenticated = (Cookies.get("role")  === userRole.SITE_ADMIN);
    

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }
    return children;
};
export default Protected;