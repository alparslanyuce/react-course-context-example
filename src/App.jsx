import SiteProvider from "./components/SiteContext";
import AuthProvider from "./components/AuthContext";
import Home from "./components/Home";

function App() {

  

  return (
    <SiteProvider>
      <AuthProvider>
      <Home />
      </AuthProvider>
    </SiteProvider>
  );
}
export default App;