plugins: [
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-131670283-1",
      head: false,
      anonymize: true,
      respectDNT: true,
      exclude: [],
      sampleRate: 5,
      siteSpeedSampleRate: 10,
      cookieDomain: "ratnasambhav.github.io",
    },
  },
]