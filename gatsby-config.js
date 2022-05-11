module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: ``,
    author: `@ZakDevs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
  ],
}
