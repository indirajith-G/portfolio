import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function ServicesContent() {
  return (
    <div id="services">
      <div className='services-heading'>
        <h3>MY services</h3>
      </div>
      <div className="services-container">
        <div className="services-grid">
          <div className="bg-1 feature-box-01" >
            <div className="icon">
              <FontAwesomeIcon icon={icon({ name: 'laptop-code' })} />
            </div>
            <div className="feature-content">
              <h5>Web Design</h5>
              <p>Agile Web solutions are the key to staying ahead of the competition. With Me as your web solution partner, you can achieve globally competitive design Quality. Also deliver end-to-end web solutions from concept to Maintenance.</p>
            </div>
          </div>
          <div className="bg-3 feature-box-01" >
            <div className="icon">
              <FontAwesomeIcon icon={icon({ name: 'wand-magic-sparkles' })} />
            </div>
            <div className="feature-content">
              <h5>Front End Design</h5>
              <p>Creating Customized Front-End Templates and Themes to Enhance Patient Experience and Streamline Communication for the world to see it.</p>
            </div>
          </div>
          <div className="bg-4 feature-box-01">
            <div className="icon">
              <FontAwesomeIcon icon={icon({ name: 'shield-heart' })} />
            </div>
            <div className="feature-content">
              <h5>Website Maintenance</h5>
              <p>Building a website isn't just about aesthetics, it's about Maintenance. The commitment doesn't end at deployment. I'll provide ongoing support and maintenance ensuring your project in top-notch condition.</p>
          </div>
          </div>
          <div className="bg-2 feature-box-01">
            <div className="icon">
              <FontAwesomeIcon icon={icon({ name: 'face-smile' })} />
            </div>
            <div className="feature-content">
              <h5>Responsive Design</h5>
              <p>Strive to craft captivating and Responsive websites that resonate with your brand, engage users, and drive results for your business.</p>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
}
