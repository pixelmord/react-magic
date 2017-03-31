import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppHeader from './components/AppHeader/AppHeader';
import HomePage from './pages/HomePage/HomePage';
import './App.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {

  render() {
    return ( 
      <MuiThemeProvider>
        <div className="App">
          <AppHeader />
          <HomePage />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
