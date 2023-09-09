import React from 'react';
import Header from './header';
import ScrollIndicator from './Scroll';
import Loader from './Loader';
import { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    // Check if the page is initially loading or being refreshed
    if (performance.navigation.type === 1) {
      // Page is being refreshed
      this.setState({ isLoading: true });
    } else {
      // Page is initially loading
      this.setState({ isLoading: false });
    }

    // Simulate data loading (replace with actual data)
    setTimeout(() => {
      this.setState({ isLoading: false }); // Data is loaded
    }, 3000); 
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div>
        {isLoading ? (
          <Loader /> 
        ) : (
          <div>
            <div>
              <div className='content'>
                <Header/>
                <ScrollIndicator />
                  {/* <div className="sections-container">
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
                  </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}


export default App;
