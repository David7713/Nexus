import React from 'react';
import Lottie from 'lottie-react'; // Import as default export
import teamAnimation from '../../assets/teamAnimation1.json'
import './About.css';

const About = () => {
  return (
    <div className="about-section" id='About'>
      <div className="about-section-image-part">
    
        <Lottie 
          animationData={teamAnimation} 
          loop={true} 
          className="about-animation"
        />
      </div>

      <div className="about-section-text-part">
        <h1>About Us</h1>
        <p>
          We are a Yerevan-based digital marketing agency dedicated to helping businesses grow and thrive. 
          Our team of experts utilizes innovative strategies and tailored solutions to elevate your brand, 
          engage your audience, and drive measurable results in the digital landscape.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower businesses to succeed online through data-driven marketing strategies 
          that deliver real results. We believe in building long-term partnerships with our clients.
        </p>
        <h2>Our Values</h2>
        <ul>
          <li>Integrity: We believe in honesty and transparency in all our dealings.</li>
          <li>Innovation: We embrace change and seek new ideas to improve our services.</li>
          <li>Collaboration: We work closely with our clients to understand their unique needs.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
