module.exports = {
  siteMetadata: {
    title: `Hotel Gatsby PWA`,
    description: `Una simple PWA con Gatsby.`,
    author: `Mattee37`,
    keyword: `gatsby, react, pwa`,
    siteUrl: `https://hotelgatsby137.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hotel Gatsby PWA`,
        short_name: `Gatsby PWA`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: "a8d5c0a4cfa0233e31e38ccb547d3a",
      },
    },
  ],
};
