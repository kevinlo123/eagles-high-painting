module.exports = {
   siteMetadata: {
      title: `Eagles High Painting Inc.`,
      description: `Eagles High Painting Inc. - Premium painting services | Professional quality work in Boston MA & surrounding cities | Skilled in Interior, Exterior, Commercial, Residential painting 100% Satisfaction. Call 617-501-8379.`,
      author: `Kevin Lopez`,
   },
   plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sass`,
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `images`,
            path: `${__dirname}/images`,
         },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: `gatsby-starter-default`,
            short_name: `EHP`,
            start_url: `/`,
            background_color: `#0A0A86`,
            theme_color: `#0A0A86`,
            display: `minimal-ui`,
            icon: `${__dirname}/images/eagles-high-painting.png`, // This path is relative to the root of the site.
         },
      },
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
   ],
};
