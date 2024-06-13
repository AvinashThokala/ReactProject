import React from 'react';
import PropTypes from 'prop-types';

function Header({ navItems }) {
  const headerStyle = {
    background: '#204969',
    color: 'white',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const navStyle = {
    display: 'flex',
    listStyle: 'none',
    padding: 0
  };

  const liStyle = {
    marginLeft: '20px'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <header style={headerStyle}>
      <h1>Avinash Thokala's Professional Blog</h1>
      <nav>
        <ul style={navStyle}>
          {navItems.map((item, index) => (
            <li key={index} style={liStyle}><a href={`#${item.toLowerCase()}`} style={linkStyle}>{item}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Header;
