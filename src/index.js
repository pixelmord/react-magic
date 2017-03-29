import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Root = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);
ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
