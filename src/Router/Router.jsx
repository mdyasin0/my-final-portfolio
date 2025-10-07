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
import DashboardLayout from "../Dashboard/Dashboardlayout";
import ColorPage from "../Dashboard/ColorPage";
import ResumeUpdater from "../Dashboard/Resume";
import ProjectsDashboard from "../Dashboard/projectmanage";
import Projectupdate from "../Dashboard/ProjectDetails";
import ProjectDetails from "../Leyout/projectdetails";
import UserDashboard from "../Dashboard/users";
import AdminProtectRoute from "../Protectsystem/AdminProtectRoute";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Hero /> },
      { path: "/hero", element: <Hero /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/authForm",
        element: <AuthForm />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projectdetails/:id" ,
        element : <ProjectDetails/>
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/bloglayout",
        element: <BlogLayout />,
        children: [
          
             { index: true, element: <HtmlBlog /> },
          // Frontend
          { path: "html", element: <HtmlBlog /> },
          { path: "css", element: <CssBlog /> },
          { path: "tailwind-css", element: <TailwindBlog /> },
          { path: "javascript", element: <JavaScriptBlog /> },
          { path: "react", element: <ReactBlog /> },

          // Backend
          { path: "node.js", element: <NodeBlog /> },
          { path: "express.js", element: <ExpressBlog /> },

          // Database
          { path: "mongodb", element: <MongoDBBlog /> },

          // Tools
          { path: "firebase", element: <FirebaseBlog /> },
          { path: "git", element: <GitBlog /> },
          { path: "vite", element: <ViteBlog /> },
        ],
      },
      {
        path: "/dashboardlayout",
        element: (
           <AdminProtectRoute>
          <DashboardLayout />
        </AdminProtectRoute>),
        children: [
           { index: true, element: <ColorPage />},
          {
            path: "/dashboardlayout/colorpage",
            element: <ColorPage />,
          },
          {
            path: "/dashboardlayout/resumeupdater",
            element: <ResumeUpdater />,
          },
          {
            path: "/dashboardlayout/projectsdashboard",
            element: <ProjectsDashboard />,
          },
          {
            path: "/dashboardlayout/projectsdashboard/:id",
            element: <Projectupdate />,
          },{
            path: "/dashboardlayout/userdashboard" ,
            element : <UserDashboard/>
          }
        ],
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default Router;
