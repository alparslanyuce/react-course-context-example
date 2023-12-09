import { useReducer } from "react";
import React,{ createContext, useContext } from "react";
import siteReducer from "./siteReducer";


const Context = createContext()

const Provider = ({children}) => {

    const[theme, setTheme] = useState('light')
    const[language, setLanguage] = useState('tr')

    const data = {
    theme,
    setTheme,
    language,
    setLanguage
  }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

const [state, dispatch ] = useReducer(siteReducer,{
    theme: localStorage.getItem('theme') || 'light',
    language: localStorage.getItem('language') || 'tr'
})

dispatch({
    type: 'UPDATE_THEME',
    value: 'dark'
})

const data = {
    ...state,
    dispatch
}

export const useSite = () => useContext(Context)

export default Provider

