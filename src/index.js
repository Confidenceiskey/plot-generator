import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { paletteTheme } from './styles/Themes/Palette/PaletteTheme';
import { ThemeProvider } from '@material-ui/styles';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider theme={paletteTheme}>
    <App />
  </ThemeProvider>, document.getElementById('root'));

serviceWorker.unregister();
