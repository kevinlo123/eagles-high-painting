import Logo from '../1_pieces/logo';
import { HamburgerSqueeze } from 'react-animated-burgers'
import { Link } from 'gatsby';
import React, { useState } from 'react';

const Header = () => {

   const [isOpen, setOpen] = useState(false);
   const toggleOpen = () => setOpen(!isOpen);

   const linkData = [
      {
         "url": "/",
         "linkText": "Home"
      },
      {
         "url": "/painting-company-boston/our-painting-team/",
         "linkText": "About Us"
      },
      {
         "url": "/painting-company-boston/our-work",
         "linkText": "Our Work"
      },
      {
         "url": "/best-boston-painting",
         "linkText": "Contact Us"
      }
   ];

   return (
      <header className="header">
         <div className="wrapper">
            <div className="header__logo-container">
               <Link to="/">
                  <Logo />
               </Link>
            </div>
            <nav className={`header__navigation ${isOpen ? 'header__navigation--open' : ''}`}>
               <div className={`header__navigation--inner ${isOpen ? 'header__navigation--inner--open' : ''}`}>
                  {linkData.map((data, index) => {
                     return (
                        <Link 
                           className="header__navigation--inner-link" 
                           activeClassName="header__navigation--inner-link-active"
                           key={index.toString()}
                           to={data.url}>
                           {data.linkText}
                        </Link>
                     )
                  })}
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
         </div>
      </header>
   )
};

export default Header;
