module.exports = {
  pathPrefix: `/gatsby-demo-blog`,
  siteMetadata: {
    title: 'DC Comics Review Blog',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
  ],
};
