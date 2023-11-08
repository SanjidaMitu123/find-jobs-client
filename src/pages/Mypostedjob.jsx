import { useLoaderData } from "react-router-dom";
import Myjobcard from "./Myjobcart";


const Mypostedjob = () => {

  const jobs = useLoaderData();
    console.log(jobs)


    return (
        <div>
          <h1 className="text-4xl text-center font-medium">My posted job status </h1> 

           {
                   
                     // eslint-disable-next-line react/prop-types
                     jobs?.map ((job)=> <Myjobcard key={job._id} job={job}></Myjobcard>)
                } 
        </div>
    );
};

export default Mypostedjob;