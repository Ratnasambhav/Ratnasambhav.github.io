module.exports = {
  siteMetadata: {
    title: `Ratnasambhav Priyadarshi`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-head`,
    {
      resolve: `gatsby-plugin-google-analytics-gdpr`,
      options: {
        trackingId: "UA-164298693-1",
        reactGaOptions: {
            debug: true,
            gaOptions: {
                sampleRate: 10
            }
        }
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ratnasambhav Priyadarshi',
        short_name: 'Ratnasambhav',
        description: 'The blog of Ratnasambhav Priyadarshi',
        dir: 'ltr',
        lang: 'en-US',
        start_url: '/',
        background_color: 'rgb(34, 33, 41)',
        theme_color: '#ee72f1',
        display: 'standalone',
        icon: 'src/styles/Logo.png',
      },
    },
    `gatsby-plugin-offline`
  ],
}
