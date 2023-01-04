import { createContext, useReducer, useEffect } from 'react'
import { apiUrl } from "../contexts/constants";
import instance from '../axiosConfig/config';


import Cookies from 'js-cookie';

export const CommunityContext = createContext()

// axios.defaults.withCredentials = true;

const CommunityContextProvider = ({ children }) => {
    // const [authState, dispatch] = useReducer(authReducer, {
    //     authLoading: true,
    //     isAuthenticated: false,
    //     role: userRole.USER
    // })

 

    const communityContextData = {  }

    return (<CommunityContext.Provider value={communityContextData}>{children}</CommunityContext.Provider>)

}

export default CommunityContextProvider
