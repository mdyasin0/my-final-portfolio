import { createBrowserRouter } from "react-router";
import App from "../App";
import Hero from "../Leyout/Hero";

const Router = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    children : [
      {path: "/hero",
        element: <Hero />,
      }
    ]
  },
]);


export default Router;