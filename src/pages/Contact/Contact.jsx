import React from 'react';
import './Contact.css';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contact-section' id='Contact'>
      <h1>
        We are excited <label>to work</label><br /> with you on your next project!
      </h1>
      <p>
        Let’s create something amazing together. Reach out to discuss your project <br /> 
        and see how Nexus  can help your brand to succeed.
      </p>
      <ul>
        <li>
          <a href="mailto:nexusnexusagancy@gmail.com" className='contact-link'>
            <MdEmail className='contact-icon' />
            nexusagancy@gmail.com

          </a>
        </li>
        <li>
          <a href="tel:+37493799533" className='contact-link'>
            <FaPhone className='contact-icon' />
            +374 93799533
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
