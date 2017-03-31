import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppHeader from './components/AppHeader/AppHeader';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import './App.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {

  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
            <AppHeader />
            <Route exact path="/" component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
