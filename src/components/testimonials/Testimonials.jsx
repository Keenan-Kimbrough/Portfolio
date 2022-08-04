import React from 'react'
import './testimonials.css'
import Henoak from '../../assets/Henoak.jpeg'
import Jasmine from '../../assets/Jasmine.jpeg'
import valentine from '../../assets/valentine.jpeg'

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const data =[
{
avatar:Jasmine,
name: "Jasmine Wallace",
review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequatur pariatur quaerat atque nam, veniam totam, dolores quos magnam a temporibus sequi nulla. Dolorum maxime explicabo dolore. Voluptates, minima at. '
},
{
avatar:Henoak,
name: "Henoak Eshetu",
review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequatur pariatur quaerat atque nam, veniam totam, dolores quos magnam a temporibus sequi nulla. Dolorum maxime explicabo dolore. Voluptates, minima at. '
},
{
avatar:valentine,
name: "Valetine Asalu",
review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequatur pariatur quaerat atque nam, veniam totam, dolores quos magnam a temporibus sequi nulla. Dolorum maxime explicabo dolore. Voluptates, minima at. '
 }
]
const testimonials = () => {
  return (
    <section id='testimonials'>
        <h5> Review From Clients</h5>
        <h2> Testimonials</h2>
        <Swiper className='container testimonials__container'
        // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      
      
            {
                data.map(({avatar, name, review}, index) => {
                  return(  
                  <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                    <img src={avatar} alt=''/>
                </div>
                <h5 className="client__name"> {name}</h5>
                        <small className="client__review">
                            {review}
                       
                        </small>
            </SwiperSlide>)
                })
            }
        </Swiper>
    </section>
  )
}

export default testimonials