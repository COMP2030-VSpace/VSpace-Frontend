import { createContext, useReducer, useEffect } from 'react'
import { apiUrl } from "../contexts/constants";
import instance from '../axiosConfig/config';


import Cookies from 'js-cookie';

export const CollectionContext = createContext()

// axios.defaults.withCredentials = true;

const CollectionContextProvider = ({ children }) => {

    // const createCommunity = async (data) => {
    //     const url = "https://vinspace.online/server/api/core/communities";

    //     const response = await instance.post(url, data);

    //     return response
    // }

    // const getCommunities = async () => {
    //     const url = "https://vinspace.online/server/api/core/communities";
        
    //     const response = await instance.get(url);

    //     return response;
    // }

    const getCollections = async (communityId) => {
        const url = `https://vinspace.online/server/api/core/communities/${communityId}/collections`
        
        const response = await instance.get(url);

        return response;
    }

 

    const collectionContextData = { getCollections }

    return (<CollectionContext.Provider value={collectionContextData}>{children}</CollectionContext.Provider>)

}

export default CollectionContextProvider
