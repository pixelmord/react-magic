import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import local app configuration, use config.example.js as template and rename
// to config.js
import config from './config';

import AppHeader from './components/AppHeader/AppHeader';
import HomePage from './pages/HomePage/HomePage';
import SectionPage from './pages/SectionPage/SectionPage';
import AboutPage from './pages/AboutPage/AboutPage';
import NoMatchPage from './pages/NoMatchPage/NoMatchPage';
import './App.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const networkInterface = createNetworkInterface({
  uri: config.REACT_APP_GRAPHQL_ENDPOINT
});
const client = new ApolloClient({networkInterface});

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <MuiThemeProvider>
            <div className="App">
              <AppHeader />
              <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/section/:id" component={SectionPage}/>
                <Route path="/about" component={AboutPage}/>
                <Route component={NoMatchPage}/>
              </Switch>
            </div>
          </MuiThemeProvider>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
