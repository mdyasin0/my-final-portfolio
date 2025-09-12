import { Outlet } from 'react-router'

import Navbar from './component/Navbar'
import Footer from './component/Footer'
import LoginPopup from './Leyout/LoginPopup'


function App() {


  return (
    <>
   <Navbar/>
   <Outlet/>
   <LoginPopup />
   <Footer/>
   
    
    </>
  )
}

export default App
