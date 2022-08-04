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
review: 'Keenan was nothing short of FANTASTIC, from day one he had quanitifiable deliverables. He was always pleasent to talk to and was definitely a positive addition to my organizaion. '
},
{
avatar:Henoak,
name: "Henoak Eshetu",
review: 'I have known Keenan for the past 10 years from our college days at The Pennsylvania State University. He was always doing great things in the community as well as professionally. All in all, while working with Keenan on engineering projects he has shown the ability so succeed. '
},
{
avatar:valentine,
name: "Valetine Asalu",
review: 'Nothing short of Amazing is what comes to my mind when I think I Keenan. We have worked together in a profesional matter in different organzations such as NSBE (National Society of Black Engineer). He has displayed the ability to handle different obstable and most always comes out on top. '
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