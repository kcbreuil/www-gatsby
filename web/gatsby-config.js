// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Backroom`,
    description: `Brand Development | Baltimore MD | Backroom`,
    author: `asasmith`,
  },
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `stqzzq3s`,
        dataset: `production`,
        watchMode: true,
        overlayDrafts: true,
        token: process.env.SANITY_READ_TOKEN,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // TODO: use .env, refresh key since it's been in gh
        apiToken: `001645ef451df7777445035847beb5`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hp-images`,
        path: `${__dirname}/src/images/hp-links`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Backroom-Mark-White.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      // options: {
      //   postCssPlugins: [require('tailwindcss')('./tailwind.config.js')],
      // },
    },
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     tailwind: true,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
