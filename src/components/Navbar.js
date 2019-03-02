import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
//actions
import { setLanguage, setMode } from '../actions/index';
// css
import './Navbar.css';


class Navbar extends Component {

  takeMeHome = (e) => { this.props.history.push('/') }

  changeLng = (e) => { this.props.setLanguage(e.target.id) }

  setModeToggle = (e) => { this.props.setMode(e.target.checked) }

  render() {
    console.log(this.props)
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
            <li>
              <div className="toggle-box">
                <input type="checkbox" name="checkbox1" id="toggle-box-checkbox" onClick={this.setModeToggle} />
                <label htmlFor="toggle-box-checkbox" className="toggle-box-label-left"></label>
                <label htmlFor="toggle-box-checkbox" className="toggle-box-label"></label>
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
    ...state,
    ...ownProps
  }
}

const mapDidpatchToProps = (dispatch) => {
  return {
    setLanguage: (lng) => { dispatch(setLanguage(lng)) },
    setMode: (val) => { dispatch(setMode(val)) }
  }
}

export default connect(mapStateToProps, mapDidpatchToProps)(withRouter(Navbar));