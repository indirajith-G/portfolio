import React from 'react';
import HomeContent from './home';
import ServicesContent from './service';
import SkillsContent from './skills';
import ContactContent from './contact';
import ProjectContent from './projects';
import Header from './header';
import HorizontalScrollIndicator from './Scroll';
function App() {

  return (
    <div>
      <div className='content'>
        <Header/>
        <HorizontalScrollIndicator />
          <div className="sections-container">
         <div>
           <HomeContent />
         </div>
         <div>
           <ServicesContent />
         </div>
         <div>
           <SkillsContent />
         </div>
         <div>
           <ProjectContent />
         </div>
         <div>
           <ContactContent />
         </div>
          </div>
      </div>
    </div>
  );
}

export default App;
