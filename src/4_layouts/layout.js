import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Logo from '../1_pieces/logo';
import Header from '../2_components/header';

const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
      query SiteTitleQuery {
         site {
            siteMetadata {
               title
               description
            }
         }
      }
   `);

   return (
      <>
         <div class="logo-container">
            <Logo />
         </div>
         <Header
            siteTitle={data.site.siteMetadata.title}
            siteDescription={data.site.siteMetadata.description}
         />
         <div>
            <main>{children}</main>
            <footer>© {new Date().getFullYear()}</footer>
         </div>
      </>
   );
};

Layout.propTypes = {
   children: PropTypes.node.isRequired,
};

export default Layout;
