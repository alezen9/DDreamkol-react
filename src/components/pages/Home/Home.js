import React, { Component } from 'react';
import { connect } from 'react-redux';
// defer bg images
import { BackgroundLazyLoader } from '../../../deferImgs';
// css
import './Home.css';
// components
import Cards from './Cards';
import HomeFooter from './HomeFooter';



class Home extends Component {

  componentDidMount() { BackgroundLazyLoader() }

  render() {
    const { language } = this.props;
    return (
      <div>
        <div className="home">
          <div className="landing">
            <div className="landing-mask" data-background-image-url='/media/home/bg.jpg'></div>
            <img className="shard" src="/media/home/logo.svg" alt="logo" />
            <div className="ddreamkol" style={{ backgroundImage: `url('/media/home/ddreamkol-${language}.svg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}></div>
            <a className="continue" href="#villages">
              <img src="/media/home/arrow-down.svg" alt="continue" />
            </a>
          </div>
          <Cards />
          <HomeFooter />
        </div>
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