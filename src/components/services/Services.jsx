import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './services.css'


const Services = () => {
  return (
    <section id='services'>
        <h5> What I Offer</h5>
        <h2> Services</h2>

       
           <div className="container service__container">
             <article className="service">
                <div className="service__head">
                    <h3> UI/UX Desgin </h3>
                </div>
                <ul className="service__list">
                    <li>
                        <BiCheck className="service__list-icon"/>
                            <p> Design Pyschology</p>
                    </li>


                    <li>
                        <BiCheck className="service__list-icon"/>
                            <p> Research Methods</p>
                    </li>

                    <li>
                        <BiCheck className="service__list-icon"/>
                            <p> Information Architecture</p>
                    </li>

                    <li>
                        <BiCheck className="service__list-icon"/>
                            <p> Wireframing / Prototyping</p>
                    </li>

                    <li>
                        <BiCheck className="service__list-icon"/>
                            <p> Interaction Design </p>
                    </li>

                    <li>
                        <BiCheck className="service__list-icon"/>
                            <p> Inclusion Design</p>
                    </li>

                    <li>
                        <BiCheck className="service__list-icon"/>
                            <p> Advanced UI Development</p>
                    </li>

                    <li>
                        <BiCheck className="service__list-icon"/>
                            <p> Lorem, ipsum dolor sit amet consectectur elit.</p>
                    </li>

                </ul>
            </article>
            
            {/* End Of UI/ UX */}
            
            <article className="service">
                <div className="service__head">
                    <h3> Web Development </h3>
                </div>
                <ul className="service__list">

                    <li>
                        <BiCheck className="service__list-icon"/>
                            <p> Professional Scrum Master Certified</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon"/>
                            <p> Computer Literacy</p>
                    </li>


                    <li>
                        <BiCheck className="service__list-icon"/>
                            <p> Strong Numeracy Skills</p>
                    </li>

                    <li>
                        <BiCheck className="service__list-icon"/>
                            <p> Strong Creative Ability</p>
                    </li>

                    <li>
                        <BiCheck className="service__list-icon"/>
                            <p> Attention to detail</p>
                    </li>

                    <li>
                        <BiCheck className="service__list-icon"/>
                            <p> Excellent Problem Solving skills</p>
                    </li>

                    <li>
                        <BiCheck className="service__list-icon"/>
                            <p>Excellent Communication Skills</p>
                    </li>

                    <li>
                        <BiCheck className="service__list-icon"/>
                            <p> Good Time Management Skills</p>
                    </li>

                   

                </ul>
            </article>
            
            {/* End of Web Development*/}
            
            <article className="service">
                <div className="service__head">
                    <h3> Content Creation</h3>
                </div>
                <ul className="service__list">
                    <li>
                        <BiCheck className="service__list-icon"/>
                            <p> Editing Skills</p>
                    </li>


                    <li>
                        <BiCheck className="service__list-icon"/>
                            <p> Deep understanding of Sales funnels</p>
                    </li>

                    <li>
                        <BiCheck className="service__list-icon"/>
                            <p> Planning Skills</p>
                    </li>

                    <li>
                        <BiCheck className="services__list-icon"/>
                            <p> SEO Skills</p>
                    </li>

                    <li>
                        <BiCheck className="services__list-icon"/>
                            <p> Content Promotion Skills</p>
                    </li>

                    <li>
                        <BiCheck className="service__list-icon"/>
                            <p> Data Analysis Skills</p>
                    </li>

                    <li>
                        <BiCheck className="service__list-icon"/>
                            <p> Technical Skills</p>
                    </li>

                    <li>
                        <BiCheck className="service__list-icon"/>
                            <p>  Influencer Experience</p>
                    </li>

                </ul>
            </article>
            </div>
            {/* end of content createion */}

           
    </section>
  )
}

export default Services