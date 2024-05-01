import { Food_Promo } from '../data/data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GrabFood_Promo from '../components/GrabFood_Promo';
import { useEffect } from 'react';
import { useQuery} from '@apollo/client';
import { getRestaurants } from '../client-graph/queries';
export default function Slick_Res({client}){

      const { loading, error, data } = useQuery(getRestaurants);

      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error : {error.message}</p>;
 
    console.log(data)
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
              {data.getRestaurant.map((item) => (
                     <div>
                      <GrabFood_Promo {...item}/>
                      </div>
                ))}
              </Slider>

        </div>
   
      </div>
    );
}