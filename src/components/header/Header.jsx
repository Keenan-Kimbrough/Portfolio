import React from 'react'
import CTA from './CTA'
import './header.css'
import me from '../../assets/me.jpeg'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>
                Hello I'm            </h5>
                <h1> Keenan Kimbrough</h1>
                <h5 classnName="text-light"> Full Stack Developer </h5>
                <CTA/>

                <div className="me">
                    <img src={me} alt=""/>
                    </div>

                    <a href='#contact' className='scroll_down'> Scroll Down</a>
        </div>
        </header>
  )
}

export default Header