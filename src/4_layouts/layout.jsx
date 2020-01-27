import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../3_regions/header';
import Footer from '../3_regions/footer';

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
         <Header
            siteTitle={data.site.siteMetadata.title}
         />
         <div className="spacer"></div>
         <main>{children}</main>
         <Footer/>
      </>
   );
};

Layout.propTypes = {
   children: PropTypes.node.isRequired,
};

export default Layout;
