import React, { useRef, useEffect } from 'react';
import './Hero.css';
import nexusAnimation from '../../../public/nexus.mp4';

const servicesList = [
  { id: 1, name: 'SMM' },
  { id: 2, name: 'Branding' },
  { id: 3, name: 'SEO' },
  { id: 4, name: 'Content Marketing' },
  { id: 5, name: 'PPC' },
  { id: 6, name: 'Email Marketing' },
  { id: 7, name: 'Web Development' },
  { id: 8, name: 'UI UX' }
];

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('ended', () => {
        // Set the video to start from a specified time (e.g., the middle)
        videoElement.currentTime = videoElement.duration / 2;
        videoElement.play(); // Restart playback from the middle
      });

      // Clean up the event listener on component unmount
      return () => {
        videoElement.removeEventListener('ended', () => {});
      };
    }
  }, []);

  const extendedServicesList = [...servicesList, ...servicesList, ...servicesList];

  return (
    <div>
      <div className='hero-section-container'>
        <div className='hero-section-text-part'>
          <h1>
            Boost Your<br></br> Brand with Expert <br></br>
            <span id='digital'>Digital Marketing</span>
          </h1>
        </div>

        <video
          ref={videoRef}
          className='video-nexus'
          autoPlay
          muted
          playsInline
        >
          <source src={nexusAnimation} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className='services-container'>
        <div className='services-list'>
          {extendedServicesList.map((service, index) => (
            <div key={`${service.id}-${index}`} className='service-item'>
              {service.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
