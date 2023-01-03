// import { SHOW_LOGIN_PANEL } from "./constants"

export const authReducer = (state, action) => {
    const {type, payload : {isAuthenticated, role}} = action 

    console.log("debug role", role);

    switch(type) {
        case 'SET_AUTH':
            console.log("set auth role", role);
            return{
                ...state,
                authLoading: false,
                isAuthenticated: isAuthenticated,
                role: role
            }

        default:
            return state
    }
}