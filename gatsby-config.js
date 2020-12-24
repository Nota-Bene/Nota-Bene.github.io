module.exports = {
  siteMetadata: {
    title: `Nota Bene`,
    description: `A computer-assisted translator of Latin to English`,
  },
  plugins: [
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nota Bene`,
        short_name: `NB`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-layout`,
  ],
  pathPrefix: "/",
}
