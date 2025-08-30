import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//img
import Schedule01 from'../assets/img/Schedule01.jpg'
import Schedule02 from'../assets/img/Schedule02.jpg'
import Schedule03 from'../assets/img/Schedule03.jpg'

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 6000,
  cssEase: "linear",
  
};



 function SliderImg() {

 
  return (
    <div className='container mx-auto max-w-fit md:pt-10 py-10 md:py-20 text-center mt-10'>
      <div><h2 className='cursor-default flex px-5 text-xl md:text-[2.25rem] leading-[1.25] font-medium text-[#FFFFF] justify-center'>กำหนดการงานนิทรรศการ <br/>
      All in Design - Thesis Exhibition 2024</h2>
      </div>
      <div className=' slider-container mt-10  h-auto max-w-fit z-0 '>
        <Slider 
        {...settings} >
             <div >
              <img src={Schedule01} alt="" className='w-[600px] justify-self-center object-cover '/>
             </div>
             <div >
              <img src={Schedule02} alt="" className="w-[600px] justify-self-center object-cover" />
             </div>
             <div >
              <img src={Schedule03} alt="" className="w-[600px] justify-self-center object-cover" />
             </div>

                
                
        </Slider>
        
      </div>
    </div>
  )
}
export default SliderImg