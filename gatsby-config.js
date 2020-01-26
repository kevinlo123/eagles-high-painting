module.exports = {
   siteMetadata: {
      title: `Eagles High Painting Inc.`,
      description: `Eagles High Painting Inc. - Premium painting services | Professional quality work in Boston MA & surrounding cities | Skilled in Interior, Exterior, Commercial, Residential painting 100% Satisfaction. Call 617-501-8379.`,
      keywords: `affordable painting boston, best painting in boston, painting boston, interior painting boston, exterior painting boston, residential painting boston, best painting company boston`,
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
            name: `Eagles High Painting Inc.`,
            short_name: `Eagles High Painting`,
            start_url: `/`,
            background_color: `#0A0A86`,
            theme_color: `#0A0A86`,
            display: `minimal-ui`,
            icon: `${__dirname}/images/eagles-high-painting.png`, // This path is relative to the root of the site.
         },
      },
      {
         resolve: `gatsby-plugin-typography`,
         options: {
           pathToConfigModule: `src/utils/typography`,
         },
       },
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
   ],
};
