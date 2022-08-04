import React from 'react'
import IMG1 from '../../assets/IMG1.png'


const data = [

    {
        id: 1,
        image: IMG1,
        title: ' Project 1',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 2,
        image: IMG1,
        title: ' Project 1',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 3,
        image: IMG1,
        title: ' Project 1',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 4,
        image: IMG1,
        title: ' Project 1',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 5,
        image: IMG1,
        title: ' Project 1',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 6,
        image: IMG1,
        title: ' Project 1',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 7,
        image: IMG1,
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

    <div className='container portfolio container'> 
       
        {
            data.map(({id,image,title,github, demo}) => {
                return (
                    <article key={id} className="portfolio__item">
                    <div className="portfolio__item-image">
                        <imag src={image} alt={title}/>
                    </div>
                    <h3> {title}</h3>
                    <div className="portflio_item-cta">
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