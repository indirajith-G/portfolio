import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function ServicesContent() {
  return (
  <div id="services">
      <div className='services-heading'>
        <h3>MY services</h3>
      </div>
    <div className="services-container">
        <div className='left'>
          <div className="bg-1 feature-box-01">
            <div className="icon">
            <FontAwesomeIcon icon={icon({name: 'user-secret'})} />
            </div>
            <div className="feature-content">
              <h5>Web Design</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="bg-2 feature-box-01">
            <div className="icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="feature-content">
              <h5>Front End Design</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className="bg-2 feature-box-01">
            <div className="icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="feature-content">
              <h5>Website Maintenance</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="bg-1 feature-box-01">
            <div className="icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="feature-content">
              <h5>Front End Design</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
    </div>
</div>
  );
}
