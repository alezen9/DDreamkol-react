import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// defer bg images
import { BackgroundLazyLoader } from '../../../deferImgs';
// css
import './Cards.css';

const eng_v = ['Bezevo', 'Boroec', 'Drenok', 'Dolno Lukovo', 'Gorno Lukovo', 'Jablanica', 'Lakaica', 'Modrich', 'Nerezi', 'Piskupshtina'];
const mkd_v = ['Безево', 'Бороец', 'Дренок', 'Долно Луково', 'Горно Луково', 'Јабланица', 'Лакаица', 'Модрич', 'Нерези', 'Пискупштина'];
const bgCard = ['bg.jpg', 'b.jpg', 'd.jpg', 'dl.jpg', 'gl.jpg', 'j.jpg', 'bg.jpg', 'm.jpg', 'n.jpg', 'p.jpg'];
const links = ['bezevo', 'boroec', 'drenok', 'dolno_lukovo', 'gorno_lukovo', 'jablanica', 'lakaica', 'modrich', 'nerezi', 'piskupshtina'];

class Cards extends Component {

    componentDidMount() { BackgroundLazyLoader() }

    renderSections = () => {
        const { language } = this.props;
        let arr = language === 'mkd' ? [...mkd_v] : [...eng_v];
        let villages = arr.map((el, i) => {
            return (
                <div key={i} className="card" data-background-image-url={(i !== 0 && i !== 6) ? `/media/home/bgCards/${bgCard[i]}` : '#222'}>
                    <div className="hoverMask"></div>
                    <div className="title-mask"></div>
                    <h3 className="village-name">{el}</h3>
                    <Link to={`/info/${links[i]}`} aria-label="info" className="infoButton">
                        <i className="fas fa-book-open"></i>
                    </Link>
                    <Link to={`/gallery/${links[i]}`} aria-label="gallery" className="mediaButton">
                        <i className="far fa-image"></i>
                    </Link>
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

export default connect(mapStateToProps)(Cards);