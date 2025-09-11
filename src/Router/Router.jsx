import { createBrowserRouter } from "react-router";
import App from "../App";
import Hero from "../Leyout/Hero";
import About from "../Leyout/About";

const Router = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    children : [
      {path: "/hero",
        element: <Hero />,
      },{
        path: "/about" ,
        element : <About/>,
      }
    ]
  },
]);


export default Router;