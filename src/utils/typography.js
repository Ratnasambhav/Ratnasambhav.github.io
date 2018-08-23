import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  scaleRatio: 2,
  headerFontFamily: ['Roboto', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['300', '400', '700', '900'],
    },
  ],
  headerColor: '#333',
  bodyColor: '#333',
  includeNormalize: true,
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 900,
});

export default typography;
