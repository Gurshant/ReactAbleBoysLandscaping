import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import HomePage from "./HomePage";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from './Theme'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  /*if (loading) {
    return <ProgressSpinner />
  }*/
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>

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
