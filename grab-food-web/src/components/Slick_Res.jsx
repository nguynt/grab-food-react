import { Food_Promo } from '../data/data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GrabFood_Promo from '../components/GrabFood_Promo';
export default function Slick_Res(){
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        swipeToSlide:true,
      
        responsive: [
          {
            breakpoint: 1024, 
            settings: {
              slidesToShow: 3, 
            }
          },
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 2, 
            }
          },
        ]
      };
    return (
        <div className='flex justify-center '>
        <div className='max-w-[1200px] w-full'>
       
              <Slider className='p-4' {...settings}>
                <div>
                  <GrabFood_Promo {...Food_Promo[0]}/>
                </div>
                <div>
                  <GrabFood_Promo {...Food_Promo[1]}/>
                </div>
                <div>
                  <GrabFood_Promo {...Food_Promo[0]}/>
                </div>
                <div>
                  <GrabFood_Promo {...Food_Promo[1]}/>
                </div>
              </Slider>
     
        </div>
   
      </div>
    );
}