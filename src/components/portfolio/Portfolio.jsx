import React from 'react'
import IMG1 from '../../assets/IMG1.png'
import img2 from '../../assets/img2.jpeg'
import './portfolio.css'

const data = [

    {
        id: 1,
        image: img2,
        title: '  Black Jack App',
        github: 'https://github.com',
        demo: 'https://https://www.forbes.com/sites/bernardmarr/2022/01/05/the-10-tech-trends-that-will-transform-our-world/.com'
    },
    {
        id: 2,
        image: img2,
        title: ' Crypto Currency Tracker App',
        github: 'https://github.com',
        demo: 'https://https://www.forbes.com/sites/bernardmarr/2022/01/05/the-10-tech-trends-that-will-transform-our-world/.com'
    },
    {
        id: 3,
        image: img2,
        title: 'Ecommerce Website',
        github: 'https://github.com',
        demo: 'https://https://www.forbes.com/sites/bernardmarr/2022/01/05/the-10-tech-trends-that-will-transform-our-world/.com'
    },
    {
        id: 4,
        image: img2,
        title: 'Searching Algorithm App',
        github: 'https://github.com',
        demo: 'https://https://www.forbes.com/sites/bernardmarr/2022/01/05/the-10-tech-trends-that-will-transform-our-world/.com'
    },
    {
        id: 5,
        image: img2,
        title: 'Commercial Vehicle Tracker App ',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 6,
        image: img2,
        title: ' Social Media App',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 7,
        image: img2,
        title: ' Project 1',
        github: 'https://github.com',
        demo: 'https://github.com'
    }
]
const Portfolio = () => {
  return (
    <section id="portfolio">
        <h5> My Recent Work</h5>
        <h2> Portfolio</h2>

    <div className='container portfolio__container'> 
       
        {
            data.map(({id,image,title,github, demo}) => {
                return (
                    <article key={id} className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={image} alt={title}/>
                    </div>
                    <h3> {title}</h3>
                    <div className="portfolio_item-cta">
                        <a href={github} className='btn' target='_blank'> GitHub</a>
                        <a href={demo} className='btn btn-primary' target='_blank'> Live Demo </a>
                    </div>
                </article>
                )
            })
        }
        
    </div>
        



    </section>
  )
}

export default Portfolio