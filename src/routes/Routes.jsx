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
import Jobdetails from "../pages/Jobdetails";
import Bidnow from "../pages/Bidnow";
import Updatejobdetails from "../pages/Updatejobdetails";

const router =   createBrowserRouter([
    {
      path: "/",
      element: <Mainpage></Mainpage>,
      errorElement : <ErrorPage></ErrorPage>,
      children :[
        {
            path: "/",
            element: <Home></Home>,
            loader : () => fetch('https://b8a11-server-side-sanjida-mitu123-1j3zjc8ut.vercel.app/jobs')
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
        loader : () => fetch('https://b8a11-server-side-sanjida-mitu123-1j3zjc8ut.vercel.app/obs')
       
    } ,
    {
      path : "/addjobs",
      element : <PrivateRoute><Addjob></Addjob></PrivateRoute>,
     
  } ,
  {
    path : "/Updatejob/:id",
    element : <PrivateRoute><Updatejobdetails></Updatejobdetails></PrivateRoute>,
    loader : ({params})=> fetch(`https://b8a11-server-side-sanjida-mitu123-1j3zjc8ut.vercel.app/jobs/${params.id}`)
    
},
  {
    path : "/mypostedjob",
    element : <PrivateRoute><Mypostedjob></Mypostedjob></PrivateRoute>,
    loader : () => fetch('https://b8a11-server-side-sanjida-mitu123-1j3zjc8ut.vercel.app/jobs')
   
} ,


{
  path : "/mybids",
  element : <PrivateRoute><Mybids></Mybids></PrivateRoute>,
  loader : () => fetch('https://b8a11-server-side-sanjida-mitu123-1j3zjc8ut.vercel.app/bids')
 
} ,
{
  path : "/bidreq",
  element : <PrivateRoute><Bidreq></Bidreq></PrivateRoute>,
  loader : () => fetch('https://b8a11-server-side-sanjida-mitu123-1j3zjc8ut.vercel.app/bids')
}  ,
{
  path : "/contacts",
  element : <Contact></Contact>,
 
} ,
{
  path : "/aboutus",
  element : <Aboutus></Aboutus>,
 
}
,
{
  path : "/bidnow/:_id",
  element : <PrivateRoute><Bidnow></Bidnow></PrivateRoute>,
  loader : () => fetch('https://b8a11-server-side-sanjida-mitu123-1j3zjc8ut.vercel.app/jobs')
  
} ,
{
  path : "/addcat",
  element : <PrivateRoute><Addcat></Addcat></PrivateRoute>,
  
},

{
  
  path : "/jobs/:_id",
  element : <PrivateRoute><Jobdetails></Jobdetails></PrivateRoute>,
  loader : () => fetch('https://b8a11-server-side-sanjida-mitu123-1j3zjc8ut.vercel.app/jobs')
   
} 
      ]
      
    },
  ]);


  export default router ;
