import { createBrowserRouter } from "react-router";
import App from "../App";
import Hero from "../Leyout/Hero";
import About from "../Leyout/About";
import AuthForm from "../Leyout/AuthForm";
import ErrorPage from "../Leyout/ErrorPage";
import Contact from "../Leyout/Contact";
import Skills from "../Leyout/Skills";
import Projects from "../Leyout/Projects";
import Blog from "../Leyout/Blog";
import BlogLayout from "../Leyout/tecnologyblog/BlogLayout";
import HtmlBlog from "../Leyout/tecnologyblog/htmlblog";
import CssBlog from "../Leyout/tecnologyblog/CSSBlog";
import TailwindBlog from "../Leyout/tecnologyblog/tailwindBlog";
import JavaScriptBlog from "../Leyout/tecnologyblog/JavaScriptBlog";
import ReactBlog from "../Leyout/tecnologyblog/ReactBlog";
import MongoDBBlog from "../Leyout/tecnologyblog/MongoDBBlog";
import FirebaseBlog from "../Leyout/tecnologyblog/FirebaseBlog";
import GitBlog from "../Leyout/tecnologyblog/GitBlog";
import ViteBlog from "../Leyout/tecnologyblog/ViteBlog";
import NodeBlog from "../Leyout/tecnologyblog/NodeBlog";
import ExpressBlog from "../Leyout/tecnologyblog/ExpressBlog";


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
      },{
        path: "/projects",
        element: <Projects/> ,
      },{
        path: "/blog" ,
        element: <Blog/> ,
      },  {
        path: "/bloglayout",
        element: <BlogLayout />, 
        children: [
          // Frontend
          { path: "html", element: <HtmlBlog /> },
          { path: "css", element: <CssBlog /> },
          { path: "tailwind-css", element: <TailwindBlog /> },
          { path: "javascript", element: <JavaScriptBlog /> },
          { path: "react", element: <ReactBlog /> },

          // Backend
          { path: "node.js", element: <NodeBlog/> },
          { path: "express.js", element: <ExpressBlog /> },

          // Database
          { path: "mongodb", element: <MongoDBBlog /> },

          // Tools
          { path: "firebase", element: <FirebaseBlog /> },
          { path: "git", element: <GitBlog /> },
          { path: "vite", element: <ViteBlog /> },
        ],
      },
    ]
  },{
    path:"*",
    element: <ErrorPage/>
  }
]);


export default Router;