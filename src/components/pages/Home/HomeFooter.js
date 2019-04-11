import React, { Component } from 'react';
import { connect } from 'react-redux';
// components
import Button from '../../Button';
// css
import './HomeFooter.css';


class HomeFooter extends Component {

    render() {
        const { language } = this.props;
        return (
            <div className="footer">
                <div className="wrapper">
                    <Button to="/aboutUs" iconClass="fas fa-info-circle" title={language === 'mkd' ? "Инфо" : "About us"} btnClasses="margin-up-1" />
                    <Button to="/tac" iconClass="fas fa-user-shield" title={language === 'mkd' ? 'Правила и Услови' : 'Terms and Conditions'} btnClasses='margin-up-1' />
                    <a href="https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000" title="Share on facebook" className="btn margin-up-1">
                        <i className="fab fa-facebook"></i>
                        {language === 'mkd' ? 'Сподели на Фејсбук' : 'Share on Facebook'}
                    </a>
                    <div className="btn margin-up-1">
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