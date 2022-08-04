
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from '@emailjs/browser';



const Contact = () => {
    const form =useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jlvve8c', 'template_78hqnjf', form.current, 'jomwnK-aqv_BKWAWJ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };


  return (
    <section id='contact'>
        <h5> Get in Touch</h5>
        <h2> Contact Me </h2>

        <div className='container contact__container'> 
            <div className='contact__options'>
                <article>
                    <MdOutlineEmail className='contact__option-icon'/>
                    <h4> Email </h4>
                        <h5> Keenankimbrough@gmail.com</h5>
                        <a href="mailto::Keenankimbrough@gmail.com" target="_blank"> Send a message</a>
                </article>

                <article>
                    <RiMessengerLine className='contact__option-icon'/>
                    <h4> Messenger </h4>
                        <h5> Kimbrough Technology </h5>
                        <a href="mailto::Keenankimbrough@gmail.com" target="_blank"> Send a message</a>
                </article>
                <article>
                    <BsWhatsapp className='contact__option-icon'/>
                    <h4> WhatsApp </h4>
                        <h5> " what's App number"</h5>
                        <a href="https://api.whatsapp.com/send?phone=+41222222" target="_blank"> Send a message</a>
                </article>
            </div>
            {/* end of contact options} */}
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='name' placeholder="Your full Name" required/>
                <input type='email' name='email' placeholder="Your Email" required />
                <textarea name="message" rows='7' placeholder='your message' required></textarea>
                <button type="submit" className=' btn btn-primary'> Send Messaage</button>
            </form>
        </div>
    </section>
  )
}

export default Contact