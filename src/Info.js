import React from 'react';
import './Info.css';
import image from './images/image.jpg';

export default function Info() {
  return (
    <div className="info-container">

          <div className="text ">
            <div className="top_text">
              <p>👋, MY NAME IS INDIRAJITH G </p>
            </div>
            <div className="center_text">
              <p>I'm a Web Developer</p>
            </div>
            <div className="bottom_text">
              <p>Based in Coimbatore, Tamil Nadu.</p>
            </div>
        </div>
        <div className="photo_frame">
          <div className="photo">
            <img src={image} alt="my" />
          </div>
        </div>
      </div>
  );
}
