import Header from "./Header"
import Footer from "./Footer"
import { useAuth } from "./AuthContext"

export default function Home() {
    
    const {user} = useAuth()
    
    
    return (
        <>
        <Header />
        App
        {user && (
            <div style={{padding:10, border:'1px solid red'}}>
                bu alan sadece giriş yapılınca görünür.
            </div>
        )}
        <br />
        <Footer />
        </>
    )
}