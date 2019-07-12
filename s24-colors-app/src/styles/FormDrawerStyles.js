import chroma from 'chroma-js';

// const lightColor = col => chroma(col).luminance() > 0.75;
const darkColor = col => chroma(col).luminance() < 0.2;
const drawerWidth = 400;

export default theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    textAlign: 'center'
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  picker: {
    margin: '1rem auto'
  },
  lowDrawer: {
    margin: 'auto 0',
    padding: '1rem 0'
  },
  button: {
    margin: '0 .5rem',
    '&#add-color-button': {
      color: ({ color }) => (darkColor(color) ? 'white' : 'rgb(51, 51, 51)')
    }
  }
});
