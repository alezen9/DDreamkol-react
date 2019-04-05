import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
//actions
import { setLanguage } from '../actions/index';
// css
import './Navbar.css';


class Navbar extends Component {

  takeMeHome = (e) => { this.props.history.push('/') }

  changeLng = (e) => { this.props.setLanguage(e.target.id) }

  render() {
    const { language } = this.props;
    return (
      <header>
        <div onClick={this.takeMeHome} className="logo"></div>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <nav>
          <ul>
            <li>
              <Link className="menu" aria-label="home" to="/">
                {language === 'mkd' ? 'Почетна' : 'Home'}
              </Link>
            </li>
            <li>
              <Link className="menu" aria-label="about" to="/about">
                {language === 'mkd' ? 'За Долни Дримкол' : 'About Dolni Drimkol'}
              </Link>
            </li>
            <li>
              <Link className="menu" aria-label="ddis" to="/ddis">
                {language === 'mkd' ? 'Долнодримколски Илинденски Средби' : 'Dolnodrimkolski Ilindenski Sredbi'}
              </Link>
            </li>
            <li>
              <div>
                <span id='mkd' className="flag mk" onClick={this.changeLng}></span>
                <span id='eng' className="flag eng" onClick={this.changeLng}></span>
              </div>
            </li>
          </ul>
        </nav>
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
      </header>
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

export default connect(mapStateToProps, mapDidpatchToProps)(withRouter(Navbar));