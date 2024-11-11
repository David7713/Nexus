import React from 'react';
import './Services.css';

import seo from '../../assets/services assets/seo.svg';
import branding from '../../assets/services assets/branding.png';
import contentMarketing from '../../assets/services assets/contentMarketing.png'; 
import reel from '../../assets/services assets/reel.png'; 
import smm from '../../assets/services assets/smm.png'; 
import webdev from '../../assets/services assets/webdev.png'; 
import uiux from '../../assets/services assets/uiux.png'; 
import email from '../../assets/services assets/email.png';
import ppc from '../../assets/services assets/ppc.svg';

const Services = () => {
  return (
    <div className='services-section' id='Services'>
      <h1>Services</h1>

      <div className='service-container'>
        <div className='service-container-item'>
          <label>SEO</label>
          <ul>
            <li>On-page SEO</li>
            <li>Off-page SEO</li>
            <li>Technical SEO</li>
          </ul>
        </div>
        <p className='service-description'>Drive traffic with targeted pay-per-click campaigns.</p>
        <div className='service-animation'>
          <img src={seo} alt='SEO Service' />
        </div>
      </div>

      <div className='service-container'>
        <div className='service-container-item'>
          <label>SMM</label>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>TikTok</li>
          </ul>
        </div>
        <p className='service-description'>Drive traffic with targeted pay-per-click campaigns.</p>
        <div className='service-animation'>
          <img src={smm} alt='SMM Service' />
        </div>
      </div>

      <div className='service-container'>
        <div className='service-container-item'>
          <label>Content Marketing</label>
          <ul>
            <li>Blog Writing</li>
            <li>Video Content</li>
            <li>Infographics</li>
          </ul>
        </div>
        <p className='service-description'>Drive traffic with targeted pay-per-click campaigns.</p>
        <div className='service-animation'>
          <img src={contentMarketing} alt='Content Marketing Service' />
        </div>
      </div>

  

      <div className='service-container'>
        <div className='service-container-item'>
          <label>Web Development</label>
          <ul>
            <li>Frontend Dev</li>
            <li>Backend Dev</li>
            <li>Full Stack Dev</li>
          </ul>
        </div>
        <p className='service-description'>Drive traffic with targeted pay-per-click campaigns.</p>
        <div className='service-animation'>
          <img src={webdev} alt='Web Development Service' />
        </div>
      </div>

      <div className='service-container'>
        <div className='service-container-item'>
          <label>Branding</label>
          <ul>
            <li>Logo Design</li>
            <li>Brand Strategy</li>
            <li>Visual Identity</li>
          </ul>
        </div>
        <p className='service-description'>Drive traffic with targeted pay-per-click campaigns..</p>
        <div className='service-animation'>
          <img src={branding} alt='Branding Service' />
        </div>
      </div>

      <div className='service-container'>
        <div className='service-container-item'>
          <label>UI & UX Design</label>
          <ul>
            <li>User Research</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
          </ul>
        </div>
        <p className='service-description'>Drive traffic with targeted pay-per-click campaigns.</p>
        <div className='service-animation'>
          <img src={uiux} alt='UI & UX Design Service' />
        </div>
      </div>

      <div className='service-container'>
        <div className='service-container-item'>
          <label>Reel Making</label>
          <ul>
            <li>Short Form Videos</li>
            <li>Storytelling</li>
            <li>Editing & Effects</li>
          </ul>
        </div>
        <p className='service-description'>Drive traffic with targeted pay-per-click campaigns.</p>
        <div className='service-animation'>
          <img src={reel} alt='Reel Making Service' />
        </div>
      </div>

      <div className='service-container'>
        <div className='service-container-item'>
          <label>PPC</label>
          <ul>
            <li>Google Ads</li>
            <li>Facebook Ads</li>
            <li>LinkedIn Ads</li>
          </ul>
        </div>
        <p className='service-description'>Drive traffic with targeted pay-per-click campaigns.</p>
        <div className='service-animation'>
          <img src={ppc} alt='PPC Service' />
        </div>
      </div>


      <div className='service-container'>
        <div className='service-container-item'>
          <label>Email Marketing</label>
          <ul>
            <li>Automation</li>
            <li>Newsletters</li>
          </ul>
        </div>
        <p className='service-description'>Drive traffic with targeted pay-per-click campaigns.</p>
        <div className='service-animation'>
          <img src={email} alt='Email Marketing Service' />
        </div>
      </div>
    </div>
  );
}

export default Services;
