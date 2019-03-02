import React, { Component } from 'react';
import { connect } from 'react-redux';
// css
import './Home.css';
import Villages from './Villages';
import HomeFooter from './HomeFooter';



class Home extends Component {

  constructor() {
    super();
    this.state = {
      bgLoaded: false
    }
  }

  mounted = () => { this.setState({ mounted: true }) }

  componentDidMount() {
    window.addEventListener("load", e => this.mounted());
    const img = new Image();
    img.src = '/media/home/bg.jpg';
    img.onload = (e) => { this.setState({ bgLoaded: true }) }
  }

  render() {
    const { language } = this.props;
    const { bgLoaded } = this.state;
    return (
      <div className="home">
        <div className="landing">
          <div className="landing-mask" style={{ backgroundImage: `url('/media/home/bg${bgLoaded ? '.jpg' : '-small.jpg'}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <img className="shard" src="/media/home/logo.svg" alt="logo" />
          <div className="ddreamkol" style={{ backgroundImage: `url('/media/home/ddreamkol-${language}.svg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}></div>
          <a className="continue" href="#villages">
            <img src="/media/home/arrow-down.svg" alt="continue" />
          </a>
        </div>
        <Villages />
        <HomeFooter />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    language: state.language,
    ...ownProps
  }
}

export default connect(mapStateToProps)(Home);