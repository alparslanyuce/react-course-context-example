import {useSite} from "./SiteContext";

export default function SwitchLanguage(){
    
    const {language, dispatch} = useSite()

    const SwitchLanguage = () => {
        dispatch({
            type: 'TOGGLE_LANGUAGE'
        })
    }
    
    return (
        <>
        mevcut dil = {language} <br />
        <button onClick={SwitchLanguage}>dili değiştir</button>
        </>
    )
}