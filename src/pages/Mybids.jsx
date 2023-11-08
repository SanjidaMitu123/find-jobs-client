import { useLoaderData } from "react-router-dom";
import Mybidcard from "./Mybidcard";
import { useEffect } from "react";
import Aos from "aos";


const Mybids = () => {

  useEffect(()=>{
    Aos.init({duration:1000})
},[])
  const bids = useLoaderData();
  console.log(bids)
    return (
        <div>
          <div>
            <h1 data-aos="zoom-in" className="text-4xl text-center font-medium">Bids Stutas  </h1>
            <div  data-aos="zoom-in-up" className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4 mb-5">
                {
                   
                     // eslint-disable-next-line react/prop-types
                     bids?.map ((bid)=> <Mybidcard key={bid._id} bid={bid}></Mybidcard>)
                }
        </div>
        </div>
        </div>
    );
};

export default Mybids;