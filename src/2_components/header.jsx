import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle, siteDescription }) => (
   <header>
      <div>
         <h1>{siteTitle}</h1>
         <h2>{siteDescription}</h2>
      </div>
   </header>
);

Header.propTypes = {
   siteTitle: PropTypes.string,
   siteDescription: PropTypes.string,
};

Header.defaultProps = {
   siteTitle: ``,
   siteDescription: ``,
};

export default Header;
