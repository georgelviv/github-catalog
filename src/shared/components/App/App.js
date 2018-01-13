import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Layout from 'shared/components/Layout/Layout';
import Home from 'routes/_index';
import Repos from 'routes/repos/_index';
import Users from 'routes/users/_index';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={Home}/>
          <Route path="/repos" component={Repos}/>
          <Route path="/users" component={Users}/>
        </Layout>
      </Router>
    );
  }
}

export default App;
