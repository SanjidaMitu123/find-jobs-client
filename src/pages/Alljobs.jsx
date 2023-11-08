import { useLoaderData } from "react-router-dom";
import Jobscard from "./Jobscard";
import { useEffect } from "react";
import Aos from "aos";






const Alljobs = () => {

    useEffect(()=>{
        Aos.init({duration:1000})
    },[])

    const jobs = useLoaderData();
    console.log(jobs)
    return (
        <div>
            <h1 data-aos="fade-up-left" className="text-4xl text-center font-medium">All Jobs  </h1>
            <div data-aos="fade-up-right" className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4 mb-5">
                {
                   
                     // eslint-disable-next-line react/prop-types
                     jobs?.map ((job)=> <Jobscard key={job._id} job={job}></Jobscard>)
                }
        </div>
        </div>
    );
};

export default Alljobs;