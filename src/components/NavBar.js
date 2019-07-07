import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';


class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slide: 0,  // How much should the Navbar slide up or down
      lastScrollY: 0,  // Keep track of current position in state
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
    // When this component mounts, begin listening for scroll changes
    //window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      // If this component is unmounted, stop listening
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { lastScrollY } = this.state; 
    const currentScrollY = window.scrollY;


    if (currentScrollY > lastScrollY) {
      this.setState({ slide: '-64px' });
    } else {
      this.setState({ slide: '0px' });
    }
    this.setState({ lastScrollY: currentScrollY });
  };


  render() {
    return (
      <div 
        style={{
            transform: `translate(0, ${this.state.slide})`,
            transition: 'transform 90ms linear',
            position: 'fixed',
            top: '0px',
            width: '100%',
            zIndex: '500',
        }}
        className='row navBar'
      >
        <nav id="mainNav" className="brandColor" style={{ height: '100%' }}>
          <div style={{ minHeight: '60px' }}>
            <div style={{ minHeight: '50px' }}>
              <h2 className="navHeader" style={{ margin: '0', color: 'white' }}>Hi</h2>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar;
