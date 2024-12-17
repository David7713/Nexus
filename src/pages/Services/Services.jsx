import React from 'react';
import './Services.css';

const serviceItems = [
  { title: 'SEO' },
  { title: 'SMM' },
  { title: 'Content Marketing' },
  { title: 'Web Development' },
  { title: 'Branding' },
  { title: 'UI & UX' },
  { title: 'Reel Making' },
  { title: 'PPC' },
  { title: 'Email Marketing' },
];

const Services = () => {
  return (
    <div className="services-page-section" id="Services">
      <h1>Our Services</h1>
      <div className="services-page-grid">
        {serviceItems.map((service, index) => (
          <div key={index} className="service-page-card">
            <p className="service-page-title">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;