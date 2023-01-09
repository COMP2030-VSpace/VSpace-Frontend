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

    const uploadFiles = async (formData, owningCollection) => {
        const url = "https://vinspace.online/server/api/submission/workspaceitems"

        const response = await instance.post(url, formData, {
            params: { 
                owningCollection: owningCollection
            },
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

 

    const itemContextData = { startSubmission, uploadFiles }

    return (<ItemContext.Provider value={itemContextData}>{children}</ItemContext.Provider>)

}

export default ItemContextProvider
