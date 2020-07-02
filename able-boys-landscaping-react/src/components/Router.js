import React from 'react'
import { Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";


// import ProgressSpinner from './ProgrsessSpinner';


class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }


  render() {
    const { loading } = this.state;
    // if (loading) {
    //   return <ProgressSpinner />
    // }
    return (
      <div className="ui App">
        <Switch>
          <Route exact path="/" render={routeProps => (
            <HomePage
              {...routeProps}
            />)}
          />
        </Switch>
      </div>
    )
  }
}

export default Router;