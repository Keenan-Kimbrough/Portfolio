import React from 'react'

const Portfolio = () => {
  return (
    <section id="portfolio">
        <h5> My Recent Work</h5>
        <h2> Portfolio</h2>

<div className='container portfolio container'> 
    <article className="portfolio__item">
        <div className="portfolio__item-image">

        </div>
        <h3> This is a portfolio Item title</h3>
        <a href='http://github.com/keenan-kimbrough' className='btn' target='_blank'> GitHub</a>
        <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'> Live Demo </a>
    </article>
    </div>
        Portfolio



    </section>
  )
}

export default Portfolio