import React from 'react'
import './about.css'
import me from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


function About() {
  return (
    <section id="about">
        <h5> Get To Know</h5>
        <h2> About Me</h2>
        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                     <img src={me} alt="Keenan Kimbrough Kimbrough Technology"/>
       </div>
                </div>
            <div className="about__content">
            <div className='about__cards'>
                <article className='about__card'>
                    <FaAward className='about__icon' />

                    <h5> Experience</h5>
                    <small> 3+ Years Working Experience </small>
                </article>
                <article className='about__card'>
                    <FiUsers className='about__icon' />

                    <h5> Clients</h5>
                    <small> Multiple Clients World wide </small>
                </article>
                <article className='about__card'>
                    <VscFolderLibrary className='about__icon' />
                    <h5> Projects</h5>
                    <small> 3+ Years Working Experience </small>
                </article> 
            </div>
            <p>
                Hi There!
                <br/>
                <br/>

                My name is Keenan Kimbrough and I am a software engineer with one year of front-end engineering and app development experience in the technology sector. Recognized for demonstrating a natural aptitude for executing successful projects on schedule and within established deadlines, I have a verifiable history of contributing directly to company growth and success throughout my career. Delivering superior administration on the latter areas of expertise requires utilization of effective communication skills, collaboration skills, as well as technology acumen, project management, decision-making, and problem-solving to support efficiency and maximum returns. 
 <br/>
                <br/>

                Currently, I am a Software Engineer with Kimbrough Technology. In this role, I am responsible for developing a front-end application to retrieve data and call web services to update partial pages without the need to reload entire pages. I also follow design specifications and update CSS of React components to be pixel perfect accordingly, implementing personal designs when instructions were not provided. In addition, I liaise with senior leadership, stakeholders, teams to ensure the company’s technological support structure is driving the business forward with minimal expenditures.
<br/>
                <br/> Colleagues describe me as a progressive, driven, down-to-earth, software engineering and project management specialist who can be relied on to offer superior solutions that deliver profitable results on time and under budget.
<br/>
                <br/>
                I am pursuing new opportunities and can be reached through this profile, or by email: Keenan.Kimbrough@gmail.com </p>
        <a href="#contact" className='btn btn-primary'> Let's Talk</a>
            </div>
        </div>
            
    </section>
  )
}

export default About