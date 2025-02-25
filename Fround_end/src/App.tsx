
import {BrowserRouter, Routes , Route, Navigate} from "react-router-dom"

import HomePage from "./pages/HomePage"
import Login from "./pages/LoginPage"
import UserRegister from "./pages/UserRigisterPage"

function App(){

  return(

    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to ="/dashbord"/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/User_rigister" element={<UserRegister/>}/>
      <Route path="/dashbord" element={<HomePage/>} />
     </Routes>
    </BrowserRouter>
     
    </>
  )
}


export default App