import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Residencies.css';
import data from '../../slider.json';


const Residencies = () => {
  return (
    <div>
      <section className='r-wrapper'>
        <div className="paddings innerWidth r-container"> 
            <div className="r-head flexColStart">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>
        </div>

        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    
        {
            data.map((card, i)=>(
                <SwiperSlide key={i}>
                    <div className='r-card'>
                    {/* <img src={`${r1.png}${card.image}`} alt={card.name} /> */}
                            <span className='secondaryText r-price'>
                                <span style={{color: "orange"}}>$</span>
                                <span>{card.Price}</span>
                            </span>

                            <span className='primaryText'>{card.name}</span>
                        </div>
                </SwiperSlide>
            ))
        }
      
      
    </Swiper>
      </section>
    </div>
  )
}

export default Residencies
