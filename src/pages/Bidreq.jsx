import { useLoaderData } from "react-router-dom";
import Bidcard from "./Bidcard";
import { useEffect } from "react";
import Aos from "aos";



const Bidreq = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])

    const bids = useLoaderData();
    console.log(bids)

    return (
        <div>
            <h1   data-aos="fade-down-left" className="text-4xl text-center font-medium" >Bid Requests</h1>
            <div  data-aos="flip-left" className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4 mb-5">
                {
                   
                     // eslint-disable-next-line react/prop-types
                     bids?.map ((bid)=> <Bidcard key={bid._id} bid={bid}></Bidcard >)
                }
        </div>
        </div>
    );
};

export default Bidreq;