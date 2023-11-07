import { useLoaderData } from "react-router-dom";
import Bidcard from "./Bidcard";



const Bidreq = () => {

    const bids = useLoaderData();
    console.log(bids)

    return (
        <div>
            <h1 className="text-4xl text-center font-medium" >bid Requests</h1>
            <div  className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4 mb-5">
                {
                   
                     // eslint-disable-next-line react/prop-types
                     bids?.map ((bid)=> <Bidcard key={bid._id} bid={bid}></Bidcard >)
                }
        </div>
        </div>
    );
};

export default Bidreq;