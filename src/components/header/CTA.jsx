import React from 'react'
import CV from '../../assets/CV.docx'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'> Download CV </a>
    <a href="#contact" className='btn btn-primmary'> Let's talk</a>
    </div>
  )
}

export default CTA