import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import BusSchedule from './BusSchedule';
// css
import './Villages.css';

const eng_v = ['Bezevo', 'Boroec', 'Drenok', 'Dolno Lukovo', 'Gorno Lukovo', 'Jablanica', 'Lakaica', 'Modrich', 'Nerezi', 'Piskupshtina'];
const mkd_v = ['Безево', 'Бороец', 'Дренок', 'Долно Луково', 'Горно Луково', 'Јабланица', 'Лакаица', 'Модрич', 'Нерези', 'Пискупштина'];
const bgCard = ['bg.jpg', 'boroec.jpg', 'drenok.jpg', 'dlukovo.jpg', 'glukovo.jpg', 'jablanica.jpg', 'bg.jpg', 'modrich.jpg', 'nerezi.jpeg', 'piskupshtina.jpg'];


class Villages extends Component {

    renderSections = () => {
        const { language } = this.props;
        let arr = language === 'mkd' ? [...mkd_v] : [...eng_v];
        let villages = arr.map((el, i) => {
            return (
                <div key={i} className="card">
                    <div className="cardBg" style={{ backgroundImage: `url('/media/home/bgCardsFull/${bgCard[i]}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <input type="checkbox" id="plus" />
                    <div className="title-mask"></div>
                    <h3 className="village-name">{el}</h3>
                    <div className="mediaButton"></div>
                    <div className="infoButton"></div>
                    <div className="fab-btn">
                        <label htmlFor="plus" className="plusToggle">
                            <div className="overlay">
                                <span>+</span>
                            </div>
                        </label>
                    </div>
                    <div className="content">
                        <BusSchedule nameDB={eng_v[i].toLowerCase()} name={el} language={language} />
                    </div>
                </div>
            )
        })
        return villages;
    }

    render() {
        return (
            <div id="villages" className="villages">
                {this.renderSections()}
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

export default connect(mapStateToProps)(Villages);