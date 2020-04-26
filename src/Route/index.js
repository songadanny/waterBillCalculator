import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Pages/Index';

class Index extends Component {
  render() {

    return (
      <div className="App pad0">
        <Switch>
          {/* Login Route 1 way*/}
          <Route path="/" exact component={Home} />

        </Switch>
      </div>
    );
  }
}

export default Index;
