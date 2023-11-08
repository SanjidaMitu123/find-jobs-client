import Aos from "aos";
import { useEffect } from "react";


const Aboutus = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    return (
        <div>
           
            <div>
            <h1 data-aos="fade-left" className="text-4xl text-center font-medium">About Us</h1>
            <img  data-aos="fade-right" className="h-[350px] w-[1200px] ml-[200px]  mb-[50px]" src="https://media.coschedule.com/uploads/2018/10/morning-brew-marketing-about-us-page.png"></img>
            </div>
        </div>
    );
};

export default Aboutus;