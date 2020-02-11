import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../4_layouts/layout';
import SEO from '../2_components/seo';
import '../../styles/main.scss';
import Hero from '../2_components/hero';


const IndexPage = () => {
   const heroImage = useStaticQuery(graphql`
      query {
         placeholderImage: file(
            relativePath: { eq: "boston-painter.jpg" }
         ) {
            childImageSharp {
               fluid(quality: 90, maxWidth: 1920)  {
                  ...GatsbyImageSharpFluid
               }
            }
         }
      }
   `);
   return (
      <Layout>
         <SEO title="Eagles High Painting inc. - A Painting Company in Boston" />
         <Hero hero={heroImage}/>
         <h1>Home</h1>
      </Layout>
   )
};

export default IndexPage;
