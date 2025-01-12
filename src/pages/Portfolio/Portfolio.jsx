import React, { useEffect } from 'react';
import './Portfolio.css';
import DoormanCover from '../../assets/portfolio assets/Doorman Assets/Doorman.jpg';
import NoHoCover from '../../assets/portfolio assets/NoHoAssets/NoHoCard1.jpg';
import DusonCover from '../../assets/portfolio assets/Duson Assets/DusonBilboard2.jpg';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  useEffect(() => {
    AOS.init();  // Initialize AOS
    AOS.refresh();  // Refresh to apply animations if content is loaded dynamically
  }, []);

  return (
    <div className='portfolio-section' id='Portfolio'>
      <h1>Our Works</h1>

      <div className='portfolio-container'>
        {/* Doorman Item */}
        <div className='portfolio-item'>
          <div data-aos="fade-up" data-aos-offset="300" >
            <Link to="/portfolio/doorman">
              <div>
                <img src={DoormanCover} alt="Doorman Project" />
              </div>
              <label>Doorman</label>
            </Link>
          </div>
        </div>

        {/* NoHo Item */}
        <div className='portfolio-item'>
        <div data-aos="fade-up" data-aos-offset="300" >

          <Link to="/portfolio/NoHo">
            <div>
              <img src={NoHoCover} alt="NoHo Project" />
              
            </div>
            <label>NoHo Cleaning</label>
          </Link>
          </div>
        </div>

        {/* Duson Item */}
        <div className='portfolio-item'>
        <div data-aos="fade-up" data-aos-offset="300" >
          <Link to="/portfolio/Duson">
            <div>
              <img src={DusonCover} alt="Duson Project" />
            </div>
            <label>Duson</label>
          </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
