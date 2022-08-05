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

                My name is Keenan Kimbrough and here is a little about me. I have always loved problem solving and diving into the world of technology! I am currently working remote as a Software Engineer Apprentice at Argo AI. where I have the opportunity to advance my knowledge and understanding of software development.
                <br/>
                <br/>

                I started learning to code while in high school, and at the time I really was not aware of what coding was. I just found it stimulating and would try to run private servers for games on my computer such as runescape and update websites of my social media accounts such as myspace. My first official course on coding was actually at Penn state University during my Freshman year of college.
 
                <br/>
                <br/>
                ver the years I found software development and specifically coding more interesting and have continued to educate myself on each area of software. I aimed to perfect my craft until I fully understood it all and could run different scripts. After my education in Mechanical Engineering I decided to pursue my business degree and then I realized that coding was my true joy. Therefore I decided to go back to school to attain a bachelors in computer Science from Western Governors University.

                <br/>
                <br/>
                Since then I've worked on countless freelance projects and have also worked with mid level and senior software engineers on projects as well. I'm familiar with a variety of programming languages and frameworks, including TypeScript, JavaScript,ReactJS, HTML, CSS, Python, DJango, Java, C++, and SQL, but I am always trying my best to add new skills to my repertoire. In addition, I would love to meet other software engineers, so feel free to reach out to me to connect!

            </p>
        <a href="#contact" className='btn btn-primary'> Let's Talk</a>
            </div>
        </div>
            
    </section>
  )
}

export default About