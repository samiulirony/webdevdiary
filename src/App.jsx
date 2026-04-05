
import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard"
import Introduction from "./pages/Introduction/Introduction"
import Services from "./pages/Services/Services"
import Settings from "./pages/Settings/Settings"
import Blog from "./pages/Blog/Blog"
import Profile from "./pages/User/Profile"
import Logout from "./auth/Logout"


function App() {

  return (
    <> 
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        
        
        
      </Routes>

    </>
  )
}

export default App
