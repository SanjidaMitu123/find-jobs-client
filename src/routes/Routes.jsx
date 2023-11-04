import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Mainpage from "../pages/Mainpage";
import Home from "../pages/Home";

const router =   createBrowserRouter([
    {
      path: "/",
      element: <Mainpage></Mainpage>,
      children :[
        {
            path: "/",
            element: <Home></Home>,
        }
      ]
      
    },
  ]);


  export default router ;
