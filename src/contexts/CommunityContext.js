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

    const createCommunity = async (data) => {
        const url = "https://vinspace.online/server/api/core/communities";

        const response = await instance.post(url, data);

        return response
    }

    const createSubCommunity = async (data, parent) => {
        const url = "https://vinspace.online/server/api/core/communities";

        const response = await instance.post(url, data, {
            params: {
                "parent": parent
            }
        });

        return response
    }

    const getCommunities = async (page, size) => {
        const url = "https://vinspace.online/server/api/core/communities";
        
        const response = await instance.get(url, {
            params:{
                "page": page,
                "size": size
            }
        });

        return response;
    }

    const getSubCommunities = async (communityId) => {
        const url = `https://vinspace.online/server/api/core/communities/${communityId}/subcommunities`
        
        const response = await instance.get(url);

        return response;
    }

 

    const communityContextData = { createCommunity, getCommunities, getSubCommunities, createSubCommunity }

    return (<CommunityContext.Provider value={communityContextData}>{children}</CommunityContext.Provider>)

}

export default CommunityContextProvider
