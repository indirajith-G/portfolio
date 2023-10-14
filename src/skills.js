import React from 'react';
import './Skills.css';
import skill from './images/skill.jpg';

import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SkillsContent() {
  return (
    <div id="skills">
      <div className='left-content'>
        <div className='skills-heading'>
          <h3>My Skills</h3>
        </div>
        <div class="skills-container">
          <div className='skills-left'>
            <div class="skills-bg-1 feature-box-02 skills-feature-content">
              <div class="skill-icon">
              <FontAwesomeIcon icon={faHtml5} />
              </div>
                <h6>HTML</h6>
            </div>
            <div class="skills-bg-2 feature-box-02 skills-feature-content">
                    <div class="skill-icon">
                    <FontAwesomeIcon icon={faBootstrap} />
                    </div>
                      <h6>BootStrap</h6>
            </div>
            <div class="skills-bg-3 feature-box-02 skills-feature-content">
                    <div class="skill-icon">
                    <FontAwesomeIcon icon={faPython} />
                    </div>
                      <h6>Python</h6>
            </div>
          </div>
          <div className='skills-right'>
            <div class="skills-bg-4 feature-box-02 skills-feature-content">
                <div class="skill-icon">
                <FontAwesomeIcon icon={faCss3Alt} />
                </div>
                  <h6>CSS</h6>
            </div>
            <div class="skills-bg-5 feature-box-02 skills-feature-content">
              <div class="skill-icon">
              <FontAwesomeIcon icon={faReact} />
              </div>
                <h6>React JS</h6>
            </div>
            <div class="skills-bg-6 feature-box-02 skills-feature-content">
                    <div class="skill-icon">
                    <FontAwesomeIcon icon={faDatabase} />
                    </div>
                      <h6>Database</h6>
            </div>
          </div>      
        </div>
      </div>
      <div className='right-content'>
        <div className='img-card image-container'> 
            <img src={skill} alt='fshdghdfk;lg'/>
        </div>
      </div>
    </div>
  );
}
