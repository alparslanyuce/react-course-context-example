import React,{ createContext, useReducer } from "react";
import { useContext } from "react";
import authReducer from "./authReducer";

const Context = createContext()

const Provider = ({children}) => {

    const [state, dispatch] = useReducer(authReducer,{
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : false
    })
    

    const data = {
    ...state,
    dispatch
  }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export const useAuth = () => useContext(Context)

export default Provider