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
  ],
};
