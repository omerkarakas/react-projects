//import React from 'react'; //imr

import PropTypes from 'prop-types';

function Header({ title, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Feedback UI',
  bgColor: 'rgba(255,255,255,0.8)',
  textColor: 'steelBlue',
};
export default Header;
