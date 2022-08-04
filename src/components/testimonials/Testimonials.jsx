import React from 'react'
import './testimonials.css'
import me from '../../assets/me.jpg'
import Henoak from '../../assets/Henoak.jpeg'
import Jasmine from '../../assets/Jasmine.jpeg'
import valentine from '../../assets/valentine.jpeg'


const data =[
{
avatar:Jasmine,
name: "Jasmine Wallace",
review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequatur pariatur quaerat atque nam, veniam totam, dolores quos magnam a temporibus sequi nulla. Dolorum maxime explicabo dolore. Voluptates, minima at. '
},
{
avatar:Henoak,
name: "Cheyenne Weber",
review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequatur pariatur quaerat atque nam, veniam totam, dolores quos magnam a temporibus sequi nulla. Dolorum maxime explicabo dolore. Voluptates, minima at. '
},
{
avatar:valentine,
name: "Henoak Eshetu",
review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequatur pariatur quaerat atque nam, veniam totam, dolores quos magnam a temporibus sequi nulla. Dolorum maxime explicabo dolore. Voluptates, minima at. '
 }
]
const testimonials = () => {
  return (
    <section id='testimonials'>
        <h5> Review From Clients</h5>
        <h2> Testimonials</h2>
        <div className='container testimonials__container'> 
            {
                data.map(({avatar, name, review}, index) => {
                  return(  
                  <article key={index} className="testimonial">
                <div className="client__avatar">
                    <img src={avatar} alt=''/>
                </div>
                <h5 className="client__name"> {name}</h5>
                        <small className="client__review">
                            {review}
                       
                        </small>
            </article>)
                })
            }
        </div>
    </section>
  )
}

export default testimonials