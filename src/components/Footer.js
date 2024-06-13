import React from 'react';

function Footer() {
  const footerStyle = {
    background: '#204969',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <footer style={footerStyle}>
      <p>Connect with me on <a href="https://www.linkedin.com/in/avinash-thokala-35080a288/" style={linkStyle}>LinkedIn</a></p>
    </footer>
  );
}

export default Footer;
