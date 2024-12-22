import React from 'react';
import './Portfolio.css';
import DoormanCover from '../../assets/portfolio assets/Doorman Assets/Doorman.jpg';
import NoHoCover from '../../assets/portfolio assets/NoHoAssets/NoHoCard1.jpg'
import DusonCover from '../../assets/portfolio assets/Duson Assets/DusonBilboard2.jpg'
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className='portfolio-section' id='Portfolio'>
      <h1>Our Works</h1>
      <div className='portfolio-container'>
        {/* Doorman Item */}
        <div className='portfolio-item'>
          <Link to="/portfolio/doorman">
            <div>
              <img src={DoormanCover} alt="Doorman Project" />
            </div>
            <label>Doorman</label>
          </Link>
        </div>

        {/* Domus Item */}
        <div className='portfolio-item'>
          <Link to="/portfolio/NoHo">
            <div>
            <img src={NoHoCover} alt="NoHo Project" />
            </div>
            <label>NoHo Cleaning</label>
          </Link>
        </div>

     
        <div className='portfolio-item'>
          <Link to="/portfolio/Duson">
            <div>
            <img src={DusonCover} alt="Doorman Project" />
            </div>
            <label>Duson</label>
          </Link>
        </div>

     
      </div>
    </div>
  );
};

export default Portfolio;
