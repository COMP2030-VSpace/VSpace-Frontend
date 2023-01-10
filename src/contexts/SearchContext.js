import { createContext, useReducer, useEffect } from 'react'
import { apiUrl } from "../contexts/constants";
import instance from '../axiosConfig/config';


import Cookies from 'js-cookie';

export const SearchContext = createContext()

// axios.defaults.withCredentials = true;

const SearchContextProvider = ({ children }) => {

    const searchTopAuthors = async () => {
        const url = "https://vinspace.online/server/api/discover/facets/author";

        const response = await instance.get(url);

        return response
    }

    const searchTopSubjects = async () => {
        const url = "https://vinspace.online/server/api/discover/facets/subject";
        
        const response = await instance.get(url);

        return response;
    }

    const searchTopDateIssued = async () => {
        const url = "https://vinspace.online/server/api/discover/facets/dateIssued";
        
        const response = await instance.get(url);

        return response;
    }


 

    const searchContextData = { searchTopAuthors, searchTopSubjects, searchTopDateIssued }

    return (<SearchContext.Provider value={searchContextData}>{children}</SearchContext.Provider>)

}

export default SearchContextProvider
