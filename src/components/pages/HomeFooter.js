import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// css
import './HomeFooter.css';


class HomeFooter extends Component {

    render() {
        const { language } = this.props;
        return (
            <div className="footer">
                <div className="wrapper">
                    <Link aria-label="aboutUs" to="/aboutUs" >
                        <i className="fas fa-info-circle"></i>
                        {language === 'mkd' ? 'Инфо' : 'About us'}
                    </Link>
                    <Link aria-label="tac" to="/tac" >
                        <i className="fas fa-user-shield"></i>
                        {language === 'mkd' ? 'Правила и Услови' : 'Terms and Conditions'}
                    </Link>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000" title="Share on facebook">
                        <i className="fab fa-facebook"></i>
                        {language === 'mkd' ? 'Сподели на Фејсбук' : 'Share on Facebook'}
                    </a>
                    <div className="tooltip">
                        <i className="fas fa-envelope-open"></i>
                        {language === 'mkd' ? 'Контакти' : 'Contacts'}
                    </div>
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

export default connect(mapStateToProps)(HomeFooter);