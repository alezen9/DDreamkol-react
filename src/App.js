import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import { Redirect } from 'react-router';
import { connect } from 'react-redux';

// components and pages
import Home from './components/pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Info from './components/pages/Info/Info';
import Gallery from './components/pages/Gallery/Gallery';
import AboutDDreamkol from './components/pages/AboutDDreamkol/AboutDDreamkol';

class App extends Component {
  constructor() {
    super();
    this.state = {
      top: 0
    }
  }

  componentDidMount() { window.addEventListener("scroll", () => { this.setState({ top: window.scrollY }) }) }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <React.Fragment>
            <Switch>
            <Route exact path="/about" component={AboutDDreamkol} />)} />
              <Route exact path="/info/:village" component={Info} />)} />
              <Route exact path="/gallery/:village" component={Gallery} />)} />
              <Route path="/" component={Home} />
              {/* <Redirect from="*" to="/" /> */}
            </Switch>
          </React.Fragment>
          {this.state.top > window.innerHeight ? <a href="#top"><div className="scrollToTop"></div></a> : ''}
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