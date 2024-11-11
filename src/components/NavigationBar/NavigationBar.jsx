import React, { useState, useEffect } from 'react';
import './NavigationBar.css';
import logo from '../../../src/assets/Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isPlaying, toggleAudio } = useAudio();

  // Reset body overflow when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleNavClick = (target) => {
    // First reset the scroll and close menu
    document.body.style.overflow = 'unset';
    setIsMenuOpen(false);

    // Then handle navigation
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  // Handle overlay click
  const handleOverlayClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      {isMenuOpen && (
        <div 
          className="mobile-overlay" 
          onClick={handleOverlayClick}
        />
      )}

      <nav className='navbar-container'>
        <div className="logo-container">
          <Link to="/" onClick={handleOverlayClick}>
            <img className='logoImage' src={logo} alt="Logo" />
          </Link>
        </div>

        <button 
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`nav-links-container ${isMenuOpen ? 'active' : ''}`}>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li onClick={() => handleNavClick('Home')}>
              <span>Home</span>
            </li>
            <li onClick={() => handleNavClick('About')}>
              <span>About us</span>
            </li>
            <li onClick={() => handleNavClick('Services')}>
              <span>Services</span>
            </li>
            <li onClick={() => handleNavClick('Portfolio')}>
              <span>Portfolio</span>
            </li>
            <li onClick={() => handleNavClick('Contact')}>
              <span>Contact</span>
            </li>
          </ul>
        </div>

        <div className="button-group">
          <button 
            className="contact-button"
            onClick={() => handleNavClick('Contact')}
          >
            Contact Us
          </button>
          <button 
            className="audio-toggle"
            onClick={toggleAudio}
            aria-label={isPlaying ? 'Mute audio' : 'Play audio'}
          >
            {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;