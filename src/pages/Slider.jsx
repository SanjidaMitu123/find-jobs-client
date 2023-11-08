import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Slider = () => {

  useEffect(()=>{
    Aos.init({duration:1000})
},[])

    return (
        <div data-aos="zoom-out" className="h-[500px]">
            <div data-aos="fade-right" className="carousel w-full h-[500px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/we-are-hiring-digital-collage_23-2149667063.jpg?w=900&t=st=1699185316~exp=1699185916~hmac=15dabf26755f613f879c92687c3ed2c4a80b510ffb8597b48640da9d66cbd0f3" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full ">
    <img src="https://as1.ftcdn.net/v2/jpg/02/58/55/00/1000_F_258550061_43hwStAIQf5bHwusnHDQ0AsaNgDP111w.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://previews.123rf.com/images/garagestock/garagestock1701/garagestock170138628/70143600-job-search-banner.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-vector/we-are-hiring-apply-now-announcement-banner-design_535749-1787.jpg?w=740" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Slider;