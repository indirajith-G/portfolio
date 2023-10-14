import './header.css';
import { useEffect, useState } from 'react';
import HomeContent from './home';
import ServicesContent from './service';
import SkillsContent from './skills';
import ProjectContent from './projects';
import ContactContent from './contact';
export default function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState(""); // Initialize with "home" or your default section ID
  
    useEffect(() => {
      const header = document.querySelector('.header');
      const handleScroll = () => {
        setIsSticky(window.scrollY > header.getBoundingClientRect().top);
  
        // Determine which section is in the viewport
        const sections = ["home", "services", "skills", "projects", "contact"];
        for (const sectionId of sections) {
          const section = document.getElementById(sectionId);
          console.log("section is"+sectionId);
          const sectionTop = section.offsetTop - (header.offsetHeight + 5);
          console.log(sectionTop); // Adjust for header height
          const sectionBottom = sectionTop + section.offsetHeight;
          console.log(sectionBottom);
  
          if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            setActiveSection(sectionId);
            break; // Exit the loop once the active section is found
          }
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const handleNavLinkClick = (event, targetId) => {
      event.preventDefault();
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - document.querySelector('.header').offsetHeight,
          behavior: "smooth",
        });
      }
    };
return (
    <>
      <div className={`header ${isSticky ? 'is-sticky' : ''}`}>
          <nav className='header__nav'>
            <ul className='list-items pt-3'>
                <li><a href="#home" data-target="home" className={activeSection === "home" ? "active" : ""} onClick={(e) => handleNavLinkClick(e, "home")}>Home</a></li>
                <li><a href="#services" data-target="services" className={activeSection === "services" ? "active" : ""} onClick={(e) => handleNavLinkClick(e, "services")}>Services</a></li>
                <li><a href="#skills" data-target="skills" className={activeSection === "skills" ? "active" : ""} onClick={(e) => handleNavLinkClick(e, "skills")}>Skills</a></li>
                <li><a href="#projects" data-target="projects" className={activeSection === "projects" ? "active" : ""} onClick={(e) => handleNavLinkClick(e, "projects")}>Projects</a></li>
                <li><a href="#contact" data-target="contact" className={activeSection === "contact" ? "active" : ""} onClick={(e) => handleNavLinkClick(e, "contact")}>Contact</a></li>
              </ul>
          </nav>
      </div>
      
      {/* Render the content components */}
      <HomeContent />
      <ServicesContent />
      <SkillsContent />
      <ProjectContent />
      <ContactContent />
    </>
  );
}
