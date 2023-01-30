import { createContext, useReducer, useEffect } from 'react'
import { apiUrl } from "../contexts/constants";
import instance from '../axiosConfig/config';


import Cookies from 'js-cookie';

export const ItemContext = createContext()

// axios.defaults.withCredentials = true;

const ItemContextProvider = ({ children }) => {

    const startSubmission = async (owningCollection) => {
        const url = `https://vinspace.online/server/api/submission/workspaceitems`
        
        const response = await instance.post(url, {}, {
            params: { 
                owningCollection: owningCollection
            }
        });

        return response;
    }

    const uploadFiles = async (formData, workspaceId) => {
        const url = `https://vinspace.online/server/api/submission/workspaceitems/${workspaceId}`;

        const response = await instance.post(url, formData, {
            // params: { 
            //     owningCollection: owningCollection
            // },
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        return response;
    }

    const saveWorkspace = async (data, workspaceId) => {
        const url = `https://vinspace.online/server/api/submission/workspaceitems/${workspaceId}`;

        const response = await instance.patch(url, data);

        return response;
    }

    const submitWorkspace = async (workspaceId) => {
        
        const url = "https://vinspace.online/server/api/workflow/workflowitems";
        const uriData = `https://vinspace.online/server/api/submission/workspaceitems/${workspaceId}`

        const response = await instance.post(url, uriData, {
            headers: {
                'Content-Type': 'text/uri-list'
            }
        });

        return response;
    }

    // const getRecentItemsWithAuth = async () => {
    //     await 
    // }

    const getRecentItemsFromSite = async () => {
        const url = "https://vinspace.online/server/api/discover/search/objects"

        const response = await instance.get(url, {
            params: {
                "dsoType": "item",
                "sort": "dc.date.accessioned,desc",
                "page": "0",
                "size": "5"
            }
        })

        return response
    }


    const getThumbnail = async (id) => {
        const url = `https://vinspace.online/server/api/core/items/${id}/thumbnail`;

        const response = await instance.get(url);

        return response;
    }

    const getBundles = async (id) => {
        const url = `https://vinspace.online/server/api/core/items/${id}/bundles`;

        const response = await instance.get(url);

        return response;
    }

    const getBitstreams = async (id) => {
        const url = `https://vinspace.online/server/api/core/bundles/${id}/bitstreams`

        const response = await instance.get(url);

        return response;
    }

 

    const itemContextData = { 
        startSubmission, uploadFiles, saveWorkspace, 
        submitWorkspace, getRecentItemsFromSite, getThumbnail, 
        getBundles, getBitstreams
    }

    return (<ItemContext.Provider value={itemContextData}>{children}</ItemContext.Provider>)

}

export default ItemContextProvider
