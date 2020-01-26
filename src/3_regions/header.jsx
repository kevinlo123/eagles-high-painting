import PropTypes from 'prop-types';
import Logo from '../1_pieces/logo';
import { Link } from 'gatsby';
import React from 'react';

const Header = ({ siteTitle }) => (
   <header>
      <div className="logo-container">
         <Logo />
      </div>
      <div>
         <Link to="/">Home</Link>
         <Link to="/painting-company-boston/our-painting-team/">About</Link>
         <Link to="/painting-company-boston/our-work">Our Work</Link>
         <Link to="/best-boston-painting">Contact</Link>
         <h1>{siteTitle}</h1>
      </div>
   </header>
);

Header.propTypes = {
   siteTitle: PropTypes.string,
};

Header.defaultProps = {
   siteTitle: ``,
};

export default Header;
