import Aos from "aos";
import { useEffect } from "react";


const Contact = () => {

    useEffect(()=>{
        Aos.init({duration:1000})
    },[])


    return (
        <div>
           
            <div>
            <h1 data-aos="flip-up" className="text-4xl text-center font-medium">Contact Us</h1>
            <img data-aos="flip-down"  className="h-[350px] w-[1200px] ml-[200px]  mb-[50px]" src="https://speechsilver.com/wp-content/uploads/2020/06/ContactUs-DollarShaveClub2.jpg"></img>
            </div>
        </div>
    );
};

export default Contact;