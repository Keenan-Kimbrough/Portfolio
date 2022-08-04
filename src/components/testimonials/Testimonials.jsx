import React from 'react'
import './testimonials.css'
import me from '../../assets/me.jpg'
const testimonials = () => {
  return (
    <section id='testimonials'>
        <h5> Review From Clients</h5>
        <h2> Testimonials</h2>
        <div className='container testimonials__container'> 
            <article className="testimonial">
                <div>
                    <img src="" alt=""/>
                </div>
                <h5 className="client__name"> Jasmine Wallace</h5>
                        <small className="client__review">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur 
                        consequatur pariatur quaerat atque nam, veniam totam, dolores quos magnam 
                        a temporibus sequi nulla. Dolorum maxime explicabo dolore. Voluptates, minima at.
                        </small>
            </article>
        </div>
    </section>
  )
}

export default testimonials