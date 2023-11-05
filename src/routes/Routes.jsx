import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Mainpage from "../pages/Mainpage";
import Home from "../pages/Home";
import ErrorPage from "../Errorpage";
import Login from "../pages/Login&reg/Login";
import Register from "../pages/Login&reg/Register";
import Alljobs from "../pages/Alljobs";
import Addjob from "../pages/Addjob";
import Mybids from "../pages/Mybids";
import Bidreq from "../pages/Bidreq";
import Contact from "../pages/Contact";
import Aboutus from "../pages/Aboutus";
import Mypostedjob from "../pages/Mypostedjob";
import PrivateRoute from "./PrivateRouter";
import Addcat from "../pages/Addcat";

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
       
    } ,
    {
      path : "/addjobs",
      element : <Addjob></Addjob>,
     
  } ,
  {
    path : "/mypostedjob",
    element : <Mypostedjob></Mypostedjob>,
   
} ,
{
  path : "/mybids",
  element : <Mybids></Mybids>,
 
} ,
{
  path : "/bidreq",
  element : <Bidreq></Bidreq>,
 
}  ,
{
  path : "/contacts",
  element : <Contact></Contact>,
 
} ,
{
  path : "/aboutus",
  element : <Aboutus></Aboutus>,
 
} ,
{
  path : "/addcat",
  element : <PrivateRoute><Addcat></Addcat></PrivateRoute>,
  
},
      ]
      
    },
  ]);


  export default router ;
