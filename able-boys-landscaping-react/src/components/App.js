import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import HomePage from "./HomePage";

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import theme from './Theme'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={createMuiTheme(theme)}>

        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={routeProps => (
              <HomePage
                {...routeProps}
              />)}
            />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}
export default App;
