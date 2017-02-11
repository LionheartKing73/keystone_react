import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {
  render() {
    
    const styles = {
      copyright: {
        fontWeight: 700,
        color: '#333',
      }
    };

    return (
      <footer>
        <p>
          <Link to={'/'}>About</Link>
          <span> | </span>
          <Link to={'/'}>Terms of Service</Link>
          <span> | </span>
          <span> Copyright </span>
          <span style={styles.copyright}>&#9400;</span>
          <span> 2016-2017 HVU. All rights reserved.</span>
        </p>
      </footer>
    );
  }
}

export default Footer;
