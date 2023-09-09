import React from 'react';
import './Info.css';
import image from './images/image.jpg';

export default function Info() {

  return (
    <div className="info-container">
      <div className="row">
        <div className="menu  col-6 ">
          <div className="text  col-12">
            <div className="top_text">
              <span>👋, MY NAME IS INDIRAJITH G </span>
            </div>
            <div className="center_text">
              <span>I'm a Web Developer</span>
            </div>
            <div className="bottom_text">
              <span>Based in Coimbatore, Tamil Nadu.</span>
            </div>
          </div>
        </div>
        <div className="photo_frame col-5 ">
          <div className="photo">
            <img src={image} alt="my" />
          </div>
        </div>
      </div>
    </div>
  );
}
