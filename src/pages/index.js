import React from 'react';
import { Link } from 'gatsby';

import Layout from '../4_layouts/layout';
import SEO from '../2_components/seo';
import '../../styles/main.scss';


const IndexPage = () => (
   <Layout>
      <SEO title="Home" />
      <Link to="/page-2/">Go to page 2</Link>
   </Layout>
);

export default IndexPage;
