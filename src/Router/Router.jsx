import { createBrowserRouter } from "react-router";
import App from "../App";
import Hero from "../Leyout/Hero";
import About from "../Leyout/About";
import AuthForm from "../Leyout/AuthForm";
import ErrorPage from "../Leyout/ErrorPage";
import Contact from "../Leyout/Contact";
import Skills from "../Leyout/Skills";

const Router = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    children : [
      { index: true, element : <Hero /> },
      {path: "/hero",
        element: <Hero />,
      },{
        path: "/about" ,
        element : <About/>,
      },{
        path: "/authForm" ,
        element : <AuthForm/>,
      },{
        path:"/contact" ,
        element : <Contact/>,
      },{
        path: "/skills" ,
        element: <Skills/> ,
      }
    ]
  },{
    path:"*",
    element: <ErrorPage/>
  }
]);


export default Router;