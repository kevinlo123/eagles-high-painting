import PropTypes from 'prop-types';
import Logo from '../1_pieces/logo';
import { HamburgerSqueeze } from 'react-animated-burgers'
import { Link } from 'gatsby';
import React, { useState } from 'react';

const Header = ({ siteTitle }) => {

   const [isOpen, setOpen] = useState(false);
   const toggleOpen = () => setOpen(!isOpen);

   return (
      <header className="header">
         <div className="header__logo-container">
            <Link to="/">
               <Logo />
            </Link>
         </div>
         <nav className={`header__navigation ${isOpen ? 'header__navigation--open' : ''}`}>
            <div className={`header__navigation--inner ${isOpen ? 'header__navigation--inner--open' : ''}`}>
               <Link 
                  className="header__navigation--inner-link" 
                  activeClassName="header__navigation--inner-link-active"
                  to="/">
                  Home
               </Link>
               <Link 
                  className="header__navigation--inner-link" 
                  activeClassName="header__navigation--inner-link-active"
                  to="/painting-company-boston/our-painting-team/">
                  About
               </Link>
               <Link 
                  className="header__navigation--inner-link" 
                  activeClassName="header__navigation--inner-link-active"
                  to="/painting-company-boston/our-work">
                  Our Work
               </Link>
               <Link 
                  className="header__navigation--inner-link" 
                  activeClassName="header__navigation--inner-link-active"
                  to="/best-boston-painting">
                  Contact
               </Link>
            </div>
         </nav>
         <div className="header__cta-hamburger-container">
            <a className="header__cta-hamburger-container-cta-call-now" href="tel:617-501-83792">Call Now</a>
            <HamburgerSqueeze 
               isActive={isOpen}
               onClick={toggleOpen}
               barColor="#0A0A86"
            />
         </div>
      </header>
   )
};

Header.propTypes = {
   siteTitle: PropTypes.string,
};

Header.defaultProps = {
   siteTitle: ``,
};

export default Header;
