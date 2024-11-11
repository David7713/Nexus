import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './DetailedView.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import portfolioData from '../../data/portfolioData'; // Import the portfolio data

const DetailedView = () => {
  const { id } = useParams();
  const project = portfolioData[id];

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when a new project is loaded
  }, [id]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <NavigationBar />
      <div className="detailed-view">
        <section className="portfolio-gallery">
          {/* Display the first image */}
          <div className="top-image">
            <img src={project.images[0]} alt={`${project.title} Top`} />
          </div>
        </section>

        <section className="brand-history">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </section>

        <section className="portfolio-gallery">
          <div className="brand-items">
            {project.images.slice(1).map((image, index) => (
              <div className="brand-item" key={index}>
                <img src={image} alt={`${project.title} ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default DetailedView;
