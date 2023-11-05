import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Mainpage from "../pages/Mainpage";
import Home from "../pages/Home";
import ErrorPage from "../Errorpage";
import Login from "../pages/Login&reg/Login";
import Register from "../pages/Login&reg/Register";
import Alljobs from "../pages/Alljobs";

const router =   createBrowserRouter([
    {
      path: "/",
      element: <Mainpage></Mainpage>,
      errorElement : <ErrorPage></ErrorPage>,
      children :[
        {
            path: "/",
            element: <Home></Home>,
        },
        {
          path : "/login",
          element : <Login></Login>,
         
      } ,
      {
          path : "/register",
          element : <Register></Register>,
         
      } ,
      {
        path : "/alljobs",
        element : <Alljobs></Alljobs>,
       
    } 
      ]
      
    },
  ]);


  export default router ;
