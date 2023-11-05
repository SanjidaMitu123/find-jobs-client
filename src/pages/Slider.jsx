import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Slider = () => {

  useEffect(()=>{
    Aos.init({duration:1000})
},[])

    return (
        <div className="h-[500px]">
            <div data-aos="fade-right" className="carousel w-full h-[500px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/1423549590/photo/fresh-flowers-wedding-decoration-table-set-up.jpg?s=1024x1024&w=is&k=20&c=U-vriNJ9jd0OVn4Cg7cuj3LzWdLU3dV3rdDTqr74-UE=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full ">
    <img src="https://media.istockphoto.com/id/1424487638/photo/fresh-flowers-wedding-decoration-table-set-up.jpg?s=1024x1024&w=is&k=20&c=_kpBoq5qpE4QNb_02kzmYKpy3mRhzd-OofGX_Ca2vX0=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/497778014/photo/beautiful-wedding-tables-and-roses.jpg?s=1024x1024&w=is&k=20&c=dH1VWReMs1haIMhU0__rzpWlFxY1W2iCFjo-hvnOIO8=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/1053715496/photo/beautifully-decorated-festive-table-with-plates-and-glasses-and-a-bouquet-of-flowers-in-a.jpg?s=1024x1024&w=is&k=20&c=nBEAoyc7mUXYkMRRvSrKkaPeNL2gGlWv0leiMtM6_w0=" className="w-full" />
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