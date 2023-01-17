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

    const searchCommunity = async (keyword) => {
        const url = "https://vinspace.online/server/api/core/communities/search/findAdminAuthorized";

        const response = await instance.get(url, {
            params: {
                "query": `dc.title:${keyword}`
            }
        })
        
        return response;
    }

    const searchSite = async (keyword) => {
        const url = "https://vinspace.online/server/api/discover/search/objects";

        const response = await instance.get(url, {
            params: {
                "page": 0,
                "size": 5,
                "configuration": "default",
                "query": keyword,
                "embed": "thumbnail",
                "embed": "item%2Fthumbnail",
                "embed": "accessStatus",
                "dsoType": "item"
            }
        })

        return response;
    }


 

    const searchContextData = { searchTopAuthors, searchTopSubjects, searchTopDateIssued, searchCommunity, searchSite }

    return (<SearchContext.Provider value={searchContextData}>{children}</SearchContext.Provider>)

}

export default SearchContextProvider
