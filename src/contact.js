import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFile,faEnvelope, 	 } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub,  faWhatsapp,  } from '@fortawesome/free-brands-svg-icons';
export default function ContactContent() {
  return (

<div id="contact" className="footer">
	<h6>Love❣️to hear from You !!!!</h6>
	<div className="footer-row">
		<div className='footer-icon-detail-container'>
			<FontAwesomeIcon  className="svg" icon={faLinkedin} />
			<a className="svg" href="https://www.linkedin.com/in/indirajith-g/" target="_blank" rel="noopener noreferrer">Linkedin</a>
		</div>
		<div className='footer-icon-detail-container'>
			<FontAwesomeIcon className="svg" icon={faWhatsapp} style={{color: "#f0f2f5",}} />
			<a className="svg"  href="https://wa.me/6382920850?text=I'm interested in your profile. Please Share Your updated resume."  target="_blank" rel="noopener noreferrer">63829 20850</a>
		</div>

		<div className='footer-icon-detail-container'>
			<FontAwesomeIcon className="svg" icon={faGithub} />
			<a className="svg" href="https://github.com/indirajith-G" target="_blank" rel="noopener noreferrer">Github</a>
		</div>
		

		<div className='footer-icon-detail-container'>
			<FontAwesomeIcon className="svg" icon={faFile} />
			<a className="svg" href="https://drive.google.com/file/d/15U5zctYYIGudy8Kcms5ZR-HTp3x3EF-X/view" target="_blank" rel="noopener noreferrer">Resume</a>
		</div>
		<div className='footer-icon-detail-container'>
			<FontAwesomeIcon className="svg" icon={faEnvelope} />
			<a className="svg" href="mailto:gurusamyindirajith@gmail.com"target="_blank" rel="noopener noreferrer">gurusamyindirajith@gmail.com</a>
		</div>
		<div className='footer-icon-detail-container'>
		<FontAwesomeIcon className="svg" icon={faLocationDot} />
		<a className="svg" href="https://drive.google.com/file/d/15U5zctYYIGudy8Kcms5ZR-HTp3x3EF-X/view" target="_blank" rel="noopener noreferrer">Bangalore,India</a>
		</div>
	</div>

	<div className="footer-row-copyright">
		<h6>Copyright © 2023</h6>
		 <p>Designed By: Indirajith - G </p>
	</div>
</div>
  );
}
