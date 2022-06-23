import { withThemeweaver, variant, value } from '../index';

export const theme = withThemeweaver(
  {
    colors: {
      primary: '#7789C8',
      secondary: '#C6D8FF',
      action: ['#F6E8E8', '#E5707A'],
      lightText: '#979797',
      mainText: '#444649',
      secondaryText: '#E5707A',
      lightBackground: '#F8F8F8',
      disabledBackground: '#E2E2E2',
      white: '#ffffff',
    },
    fonts: {
      poppins: "'Poppins', sans-serif",
      roboto: "'Roboto', sans-serif",
      openSans: "'Open Sans', sans-serif",
    },
    fontSizes: [10, 12, 14, 18, 24, 32],
    fontWeights: {
      regular: '400',
      bold: '700',
    },
    lineHeights: ['normal', '2', 3],
    letterSpacings: ['normal', '.2rem', 1],
    sizes: [0, '100%', 80],
    space: [0, 4, 8, 16, 20, 32, 64],
    borders: ['dashed red', 'thick double #32a1ce'],
    borderWidths: ['3px 5px 3px 5px', '3px'],
    borderStyles: ['none', 'solid'],
    radii: [0, '5px', '20px'],
    shadows: ['1px 1px 2px pink', '5px 5px #558ABB'],
    transitions: {
      down: 'top 500ms ease-in-out',
      left: 'left 500ms ease',
      right: 'right 500ms ease',
      colorBig: 'color 500ms ease',
      padding: 'padding 500ms ease',
    },
    breakpoints: ['0', '40em', '52em', '64em', '80em'],
  },
  {
    // beginning of themeweaver asignments *****************
    document: {
      paddingLeft: 2,
      paddingRight: 2,
    },
    content: {
      paddingLeft: 2,
    },
    button: {
      ...variant('nav', {
        height: value('50px'),
        width: value('50px'),
        color: 'action[1]',
      }),
    },
    nav: {
      ...variant('main', {
        backgroundColor: ['secondary', 'lightBackground'],
        border: [0, 1],
        borderTop: [0, 1],
        borderRight: [0, 1],
        borderBottom: [0, 1],
        borderLeft: [0, 1],
        borderColor: ['lightBackground', 'secondary'],
        borderRadius: [0, 1],
        borderStyle: [0, 1],
        borderWidth: [0, 1],
        boxShadow: [0, 1],
      }),
      ...variant('hover', {
        color: 'action[0]',
        backgroundColor: 'action[0]',
        fontFamily: 'poppins',
        fontSize: 3,
        fontWeight: 'bold',
        padding: 6,
      }),
    },
    banner: {
      paddingTop: '10px',
    },
  }
);

export default theme;
