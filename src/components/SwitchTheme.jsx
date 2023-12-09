import {useSite} from "./SiteContext";

export default function SwitchTheme(){
    
    const {theme, dispatch} = useSite()

    const switchTheme = () => {
        dispatch({
            type:'TOOGLE_THEME',
            value: theme === 'light' ? 'dark' : 'light'
        })
    }
    
    return(
        <>
            mevcut tema = {theme} <br />
            <button onClick={switchTheme}>temayı değiştir</button>
        </>
    )
}
