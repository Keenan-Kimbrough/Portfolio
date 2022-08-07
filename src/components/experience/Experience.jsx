import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import './experience.css'

const Experience = () => {
  return (
    <section id='experiences'>
        <h5> What Skills I Have</h5>
        <h2> My Experiences </h2>
        <div className='container experience__container'> 
            <div className='experience__frontend'> 
                <h3> Frontend Development</h3>
                <div className="experience__content">
                    <article className="experience__details"> 
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4> HTML</h4>
                        <small className="text-light"> Experienced</small>
                        </div>
                    </article> 
                    <article className="experience__details"> 
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4> CSS</h4>
                        <small className="text-light"> Experienced</small>
                        </div>
                    </article> 
                    <article className='experience__details'> 
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4> JavaScript</h4>
                        <small className="text-light"> Experienced</small>
                        </div>
                    </article> 
                    <article className="experience__details"> 
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4> BootStrap</h4>
                        <small className="text-light"> Experienced</small>
                        </div>
                    </article> 
                    <article className="experience__details"> 
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4> Sass </h4>
                        <small className="text-light"> Experienced</small>
                        </div>
                    </article> 
                    <article className="experience__details"> 
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4> React</h4>
                        <small className="text-light"> Experienced</small>
                        </div>
                    </article> 
                </div>
            </div>
            {/*END OF FRONT END*/}
            <div className="experience__backend">
                <h3> Backend Development</h3>
                <div className="experience__content">
                    <article className="experience__details"> 
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4> Node JS</h4>
                        <small className="text-light"> Experienced</small>
                        </div>
                    </article> 
                    <article className="experience__details"> 
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4> Java</h4>
                        <small className="text-light"> Experienced</small>
                        </div>
                    </article> 
                    <article className="experience__details" > 
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4> C++</h4>
                        <small className="text-light"> Experienced</small>
                        </div>
                    </article> 
                    <article className="experience__details" > 
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4> Python</h4>
                        <small className="text-light"> Experienced</small>
                        </div>
                    </article> 
                    <article className="experience__details" > 
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4> MongoDB</h4>
                        <small className="text-light"> Experienced</small>
                        </div>
                    </article> 
                    <article className="experience__details"> 
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4> DJango</h4>
                        <small className="text-light"> Experienced</small>
                        
                        </div>
                    </article> 
                    
                    
                </div>

            </div>
        </div>
    </section>
  )
}

export default Experience