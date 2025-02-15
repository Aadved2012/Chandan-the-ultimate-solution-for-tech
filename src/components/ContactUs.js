import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className='contact-container' id="contact">
            <h2 className='contact-subtitle'>Get In Touch</h2>
            <p>We're here to help and answer all your questions. Look forward to hearing from you!</p>
            <div className='flex-container'>
                <div className='flex-item address-container'>
                    <h3>Our Address</h3>
                    <p>R.C. Mintri Road</p>
                    <p>Near C.K. Chowk, Kalimpong</p>
                    <p>West Bengal, India 734301</p>
                    <hr />
                    <h3>Contact Details</h3>
                    <a href='tel:+919800000608'>+91-98000-00608</a>
                    <a href="mailto:someone@example.com">bikashkalimpong80@gmail.com</a>
                </div>
                <div className='flex-item iframe-container'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3552.7445293168275!2d88.47036031541496!3d27.069810759825316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4220268418917%3A0x7341b5205fdf0f67!2sCHANDAN%20The%20Ultimate%20Solution%20For%20Technology!5e0!3m2!1sen!2sin!4v1652857002880!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </div>
    )
}

export default ContactUs