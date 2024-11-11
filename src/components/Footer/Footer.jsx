import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import NexusLogoFooter from '../../assets/NexusLogoFooter.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling effect
    });
  };

  return (
    <div className='footer-section'>
      <Link to="/" onClick={handleScrollToTop}>
        <img className='logoImage' src={NexusLogoFooter} alt="Logo" />
      </Link>
      <ul className='social-icons'>
        <a target='_blank' href='https://www.facebook.com/nexusagancy'><li><FaFacebook /></li></a>
        <a target='_blank' href='https://www.instagram.com/nexus_digital_marketing_agency/'><li><FaInstagram /></li></a>
        <a href=''><li><FaLinkedin /></li></a>
      </ul>
      <label className='footer-text'>© {currentYear} Nexus · All rights reserved.</label>
    </div>
  );
};

export default Footer;
