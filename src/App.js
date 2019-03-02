import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

// components and pages
import Home from './components/pages/Home';
import Navbar from './components/Navbar';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
            <div className="App">
              <Navbar />
              <div className="content">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Redirect from="*" to="/" />
                </Switch>
              </div>
              <p className="app-footer">{`${new Date().getFullYear()} - Aleksandar Gjoreski`}</p>
            </div>
      </BrowserRouter>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    ...ownProps
  }
}

export default connect(mapStateToProps)(App);