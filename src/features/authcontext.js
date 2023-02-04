import { createContext, useReducer } from "react";
export const AuthContext = createContext()
export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGOUT' :
            return { token: null }
        default:
            return state
    }
    
} 
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        token: null
    })

    console.log('AuthContext state: ', state)
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}
