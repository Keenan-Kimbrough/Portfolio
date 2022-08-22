import React from 'react'
import IMG1 from '../../assets/IMG1.png'
import img2 from '../../assets/img2.jpeg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpeg'
import img5 from '../../assets/img5.jpeg'
import img6 from'../../assets/img6.jpeg'
import img1 from'../../assets/img1.jpeg'

import './portfolio.css'

const data = [

    {
        id: 1,
        image: img1,
        title: ' Multiplayer Black Jack App',
        github: 'https://github.com/Keenan-Kimbrough/Black_Jack_React_TypeScript',
        demo: 'https://https://www.forbes.com/sites/bernardmarr/2022/01/05/the-10-tech-trends-that-will-transform-our-world/.com'
    },
    {
        id: 2,
        image: img2,
        title: ' Crypto Currency Tracker App',
        github: 'https://github.com/Keenan-Kimbrough/Cryptocurrency_Tracker',
        demo: 'https://https://www.forbes.com/sites/bernardmarr/2022/01/05/the-10-tech-trends-that-will-transform-our-world/.com'
    },
    {
        id: 3,
        image: img3,
        title: 'Ecommerce Website',
        github: 'https://github.com/Keenan-Kimbrough/Clothing-Store-ReactJS',
        demo: 'https://https://www.forbes.com/sites/bernardmarr/2022/01/05/the-10-tech-trends-that-will-transform-our-world/.com'
    },
    
    {
        id: 4,
        image: img6,
        title: ' Social Media App',
        github: 'https://github.com/Keenan-Kimbrough/Twitter-App',
        demo: 'https://github.com/Keenan-Kimbrough/Twitter-App'
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
                        {/*<a href={demo} className='btn btn-primary' target='_blank'> Live Demo </a>*/}
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