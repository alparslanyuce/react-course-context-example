import SwitchLanguage from "./SwitchLanguage"
import SwitchTheme from "./SwitchTheme"
import { useAuth } from "./AuthContext"

function Header() {
    
    const {user, dispatch} = useAuth()

    const login = () => {
        //username and password apiye iletiyorum
        //cevap dönüyor
        dispatch({
            type: 'LOGIN',
            payload: {,
                //dönen cevap burası
                name:'alparslan',
                id:1
            }
        })
    }

    const logout = () => {
        dispatch({
            type:'LOGOUT'
        })
    }

    return(
        <header>
            header <br />
            {user && <button onClick={logout}>Çıkış yap</button>  || <button onClick={login}>Giriş yap</button>}
            <hr />
            <SwitchTheme />
            <SwitchLanguage />
        </header>
    )
}
export default (Header)