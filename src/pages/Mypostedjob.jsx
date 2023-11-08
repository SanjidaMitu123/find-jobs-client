import { useLoaderData } from "react-router-dom";
import Myjobcard from "./Myjobcart";
import { useEffect } from "react";
import Aos from "aos";


const Mypostedjob = () => {

  useEffect(()=>{
    Aos.init({duration:1000})
},[])

  const jobs = useLoaderData();
    console.log(jobs)


    return (
        <div>
          <h1 data-aos="zoom-in-right" className="text-4xl text-center font-medium">My posted job status </h1> 

           {
                   
                     // eslint-disable-next-line react/prop-types
                     jobs?.map ((job)=> <Myjobcard key={job._id} job={job}></Myjobcard>)
                } 
        </div>
    );
};

export default Mypostedjob;