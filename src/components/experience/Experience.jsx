import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
        <h5> What Skills I Have</h5>
        <h2> My Experience</h2>
        <div className='Container experience__container'> 
            <div className='experience__frontend'> 
                <h3> Frontend Development</h3>
                <div className="experience__content">
                    <article> 
                        <BsPatchCheckFill/>
                        <div>
                        <h4> HTML</h4>
                        <small className="text-light"> Experienced</small>
                        </div>
                    </article> 
                    <article> 
                        <BsPatchCheckFill/>
                        <div>
                        <h4> CSS</h4>
                        <small className="text-light"> Experienced</small>
                        </div>
                    </article> 
                    <article> 
                        <BsPatchCheckFill/>
                        <div>
                        <h4> JavaScript</h4>
                        <small className="text-light"> Experienced</small>
                        </div>
                    </article> 
                    <article> 
                        <BsPatchCheckFill/>
                        <div>
                        <h4> BootStrap</h4>
                        <small className="text-light"> Experienced</small>
                        </div>
                    </article> 
                    <article> 
                        <BsPatchCheckFill/>
                        <div>
                        <h4> TailWind</h4>
                        <small className="text-light"> Experienced</small>
                        </div>
                    </article> 
                    <article> 
                        <BsPatchCheckFill/>
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
                    <article> 
                        <BsPatchCheckFill/>
                        <div>
                        <h4> Node JS</h4>
                        <small className="text-light"> Experienced</small>
                        </div>
                    </article> 
                    <article> 
                        <BsPatchCheckFill/>
                        <div>
                        <h4> Java</h4>
                        <small className="text-light"> Experienced</small>
                        </div>
                    </article> 
                    <article> 
                        <BsPatchCheckFill/>
                        <div>
                        <h4> C++</h4>
                        <small className="text-light"> Experienced</small>
                        </div>
                    </article> 
                    <article> 
                        <BsPatchCheckFill/>
                        <div>
                        <h4> Python</h4>
                        <small className="text-light"> Experienced</small>
                        </div>
                    </article> 
                    <article> 
                        <BsPatchCheckFill/>
                        <div>
                        <h4> MongoDB</h4>
                        <small className="text-light"> Experienced</small>
                        </div>
                    </article> 
                    <article> 
                        <BsPatchCheckFill/>
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