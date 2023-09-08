import './header.css';
import { useEffect, useState } from 'react';

import React from 'react'

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(()=>{
        const header = document.querySelector('.header');
        const headerTop = header.getBoundingClientRect().top;
        const handleScroll = () =>{
            setIsSticky(window.scrollY > headerTop);
        };
        window.addEventListener("scroll", handleScroll);

 

return() => {
    window.removeEventListener("scroll", handleScroll);
};

}, []);

  return (
    <>
    <header className={`header ${isSticky ? 'is-sticky' : ''}`}>
        <div className='header__inner'>
            {/* <div className='header__logo'>
                <svg width="110" height="26" fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                    d= "full path on my GH!" fill="currentcolor" />
                </svg>
            </div> */}
            
            <nav className='header__nav'>
                <ul className='list-items pt-3'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    
        </>


    )
}
