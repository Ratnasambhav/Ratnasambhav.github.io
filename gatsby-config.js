module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ratnasambhav Priyadarshi',
        short_name: 'Ratnasambhav',
        description: 'The blog of Ratnasambhav Priyadarshi',
        dir: 'ltr',
        lang: 'en-US',
        start_url: '/',
        background_color: '#e0e0e0',
        theme_color: '#e0e0e0',
        display: 'standalone',
        icon: 'src/sass/assets/logo.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-131670283-1',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 650,
              quality: 100,
              wrapperStyle: 'max-width: 100vw; width: 100%; height: auto; display: block; min-height: 300px; position: relative',
              withWepb: true,
            },
          },
        ],
      },
    },
  ],
};
