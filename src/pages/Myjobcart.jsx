import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
function Myjobcard({job}) {
    

    useEffect(()=>{
        Aos.init({duration:1000})
    },[])


    const  { _id,employername,jobtitle,description,minimumprice,maxprice,category,img }=job;


    const jobdelete = _id =>{
        console.log(_id);
        Swal.fire("Delete Sucessfully!");
        fetch(`http://localhost:5000/jobs/${_id}`,{
            method : 'DELETE'
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
        })

        
    }
    return (
        <div>
             <div>
            <div data-aos="zoom-out-down" key={_id}   className="relative m-11 h-[450px] flex  w-69 flex-col rounded-xl mt-5 bg-clip-border text-gray-700 shadow-md">
      
      <div  className="relative mb-5  h-36 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img
          src={img}
          className="h-full w-full object-cover "
        />
      </div>
    
      <div className="p-2">
        <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
          <p className="block font-sans text-center text-xl font-medium leading-relaxed text-cyan-500 antialiased">
          {jobtitle}
          </p>
          <p className="block font-sans text-center text-s font-medium leading-relaxed text-lime-500 antialiased">
          {employername}
          </p>
    
        </div>
      </div>
      <div className="p-2">
        <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
          <p className="block font-sans text-sm text-center text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
          {description}
          </p>
    
        </div>
      </div>
      <div className="p-2">
        <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
          <p className="block font-sans text-sm text-center text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
          Job Type: {category}
          </p>
    
        </div>
      </div>
      <div className="p-2">
        <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
          <p className="block text-xl font-sans text-center text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            Cost ${minimumprice} to ${maxprice}
          </p>
    
        </div>
      </div>
      <div className="flex">

      <Link to={`/Updatejob/${_id}`}>
      <div className="p-2 pt-2 w-[600px]">
        <button
          className="block text-xl border-solid border-2 border-[#ff44b7] text-black w-[50%] select-none rounded-lg bg-blue-gray-900/10 py-1 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Update
        </button>
      </div>
      </Link>

    
      <div className="p-2 pt-2  w-[600px]">
        <button onClick={()=>jobdelete(_id)}
          className="block text-xl border-solid border-2 border-[#ff44b7] text-black w-[50%] select-none rounded-lg bg-blue-gray-900/10 py-1 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Delete
        </button>
      </div>
    
      </div>
    </div> 
            
        </div>
        </div>
    )
}

export default Myjobcard
