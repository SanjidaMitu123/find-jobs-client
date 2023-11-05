
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useContext } from "react";
import { AuthContext } from "../../firebase/Authprovider";
const Navbar = () => {

    const {user, logout}= useContext(AuthContext);

    const singOUT = () =>{
        logout()
          .then()
          .catch()
     }
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
     
        
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"> 
        <Logo></Logo>
        Find Job
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li>
                  
                  

                  <NavLink
                   to="/"
                   className={({ isActive, isPending }) =>
                   isPending ? "pending" : isActive ? "text-[#ff44b7] underline" : ""
                    }
                   >
                    Home
                 </NavLink>
                 </li>
                 <li>
                 <NavLink
                   to="/alljobs"
                   className={({ isActive, isPending }) =>
                   isPending ? "pending" : isActive ? "text-[#ff44b7] underline" : ""
                    }
                   >
                   All Jobs
                 </NavLink>
              </li>
                 <li>
                 <NavLink
                   to="/addjobs"
                   className={({ isActive, isPending }) =>
                   isPending ? "pending" : isActive ? "text-[#ff44b7] underline" : ""
                    }
                   >
                    Add job
                 </NavLink>
              </li>
              <li>
                 <NavLink
                   to="/mypostedjob"
                   className={({ isActive, isPending }) =>
                   isPending ? "pending" : isActive ? "text-[#ff44b7] underline" : ""
                    }
                   >
                   My posted jobs
                 </NavLink>
              </li>
           
              <li>
                 <NavLink
                   to="/mybids"
                   className={({ isActive, isPending }) =>
                   isPending ? "pending" : isActive ? "text-[#ff44b7] underline" : ""
                    }
                   >
                    My Bids
                 </NavLink>
              </li>
              <li>
                 <NavLink
                   to="/blogs"
                   className={({ isActive, isPending }) =>
                   isPending ? "pending" : isActive ? "text-[#ff44b7] underline" : ""
                    }
                   >
                    Bid Requests
                 </NavLink>
              </li>
              <li>
                 <NavLink
                   to="/contacts"
                   className={({ isActive, isPending }) =>
                   isPending ? "pending" : isActive ? "text-[#ff44b7] underline" : ""
                    }
                   >
                    Contact
                 </NavLink>
              </li>
              <li>
                 <NavLink
                   to="/contacts"
                   className={({ isActive, isPending }) =>
                   isPending ? "pending" : isActive ? "text-[#ff44b7] underline" : ""
                    }
                   >
                    About Us
                 </NavLink>
              </li>
              {
                  user ?
                  
                  <li>
                   <div>
                   
                  <button onClick={singOUT} className=" btn btn-primary">Sing out</button>
                  <span className="text-black"> {user.email} </span>
                  </div>
                

                  </li>
                  

                  
                  :
                  <li>
                  <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-gray-400 underline" : ""
                     }
                    >
                     My Account
                  </NavLink>
               </li>
                

                }
              
       
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Navbar;