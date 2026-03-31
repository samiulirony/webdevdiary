
import { Route, Routes } from "react-router-dom"
import BlankPage from "./pages/BlankPage/BlankPage"
import Dashboard from "./pages/Dashboard/Dashboard"
import Introduction from "./pages/Introduction/Introduction"
import NavigateLibrary from "./pages/NavigateLibrary/NavigateLibrary"
import Settings from "./pages/Settings/Settings"
import User from "./pages/User/User"
import Logout from "./auth/Logout"
import Profile from "./pages/User/Profile"


function App() {

  return (
    <> 
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/navigate-library" element={<NavigateLibrary />} />
        <Route path="/blank-page" element={<BlankPage />} />
        <Route path="/user" element={<User />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      
      
      {/* <NavigateLibrary /> */}
      {/* <BlankPage /> */}
      {/* <User /> */}
      {/* <Settings /> */}

    </>
  )
}

export default App
