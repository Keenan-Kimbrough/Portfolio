import React from 'react'
import CV2 from '../../assets/CV2.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV2} download className='btn'> Download CV </a>
    <a href="#contact" className='btn btn-primmary'> Let's talk</a>
    </div>
  )
}

export default CTA