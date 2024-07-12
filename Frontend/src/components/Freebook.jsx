import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";
import list from '../../public/list.json'
import Card from './Card';
const Freebook = () => {
    const freeData=list.filter((data)=>data.category==="free");
    //console.log(freeData);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
        <h1 className='font-semi-bold text-xl pb-2'>Free Books</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, quo qui. Adipisci reiciendis voluptatem voluptatibus!</p>
        </div>
    
    
    <div className='my-4' >
      <Slider {...settings}>
        {
            freeData.map((book)=>(
                <Card item={book} key={book.id} />
            ))
        }
      </Slider>
       </div>
    </div>
    </>
  )
}

export default Freebook;
