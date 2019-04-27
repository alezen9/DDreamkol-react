import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
//actions
import { setLanguage } from '../../actions/index';
// css
import './Navbar.css';


class NavbarApple extends Component {
  constructor() {
    super();
    this.state = {
      headerClasses: 'header'
    }
  }

  changeLng = (e) => { this.props.setLanguage(e.target.id) }

  toggleMenu = () => { if(window.innerWidth < 1020) this.setState({ headerClasses: this.state.headerClasses === 'header' ? 'header menu-opened' : 'header' }); }

  render() {
    const { language } = this.props;
    const { headerClasses } = this.state;
    return (
      <div className={headerClasses}>
        <div className="burger-container" onClick={this.toggleMenu}>
          <div id="burger">
            <div className="bar topBar"></div>
            <div className="bar btmBar"></div>
          </div>
        </div>
        <ul className="menu">
          <li className="menu-item" onClick={this.toggleMenu}>
            <Link className="link-item" aria-label="home" to="/">
              {language === 'mkd' ? 'Почетна' : 'Home'}
            </Link>
          </li>
          <li className="menu-item" onClick={this.toggleMenu}>
            <Link className="link-item" aria-label="about" to="/about">
              {language === 'mkd' ? 'За Долни Дримкол' : 'About Dolni Drimkol'}
            </Link>
          </li>
          <li className="menu-item" onClick={this.toggleMenu}>
            <Link className="link-item" aria-label="ddis" to="/ddis">
              {language === 'mkd' ? 'Дд. И. Средби' : 'Dd. I. Sredbi'}
            </Link>
          </li>
          <li className="menu-item" > <div id="mkd" onClick={this.changeLng}>{language === 'mkd' ? 'Македонски' : 'Macedonian'} </div></li>
          <li className="menu-item"> <div id="eng" onClick={this.changeLng}>{language === 'mkd' ? 'Англиски' : 'English'} </div></li>
        </ul>
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

const mapDidpatchToProps = (dispatch) => {
  return {
    setLanguage: (lng) => { dispatch(setLanguage(lng)) }
  }
}

export default connect(mapStateToProps, mapDidpatchToProps)(withRouter(NavbarApple));