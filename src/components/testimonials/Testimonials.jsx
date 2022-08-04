import React from 'react'
import './testimonials.css'
const testimonials = () => {
  return (
    <section id='testimonials'>
        <h5> Review From Clients</h5>
        <h2> Testimonials</h2>
        <div className='container testiomnials__container'> 
            <article className="testimonials">
                <div>
                    <img src="" alt=""/>
                    <h5 className="client__name"> Jasmine Wallace</h5>
                        <small className="client__review">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur 
                        consequatur pariatur quaerat atque nam, veniam totam, dolores quos magnam 
                        a temporibus sequi nulla. Dolorum maxime explicabo dolore. Voluptates, minima at.
                        </small>
                </div>
            </article>
        </div>
    </section>
  )
}

export default testimonials