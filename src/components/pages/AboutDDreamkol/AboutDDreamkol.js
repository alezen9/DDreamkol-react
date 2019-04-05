import React, { Component } from 'react';
import { connect } from 'react-redux';
import dbAbout from './dbAbout';
import { BackgroundLazyLoader } from '../../../deferImgs';
// css
import './AboutDDreamkol.css';

class AboutDDreamkol extends Component {

    componentDidMount() { BackgroundLazyLoader() }

    renderText = (arr) => {
        return arr.map((line, i) => {
            //return (line === 'PICTURE' ? <img class="inTextRight" src="/media/about/via_egnatia.png" alt="Via Egnatia"></img> : <p className="textLine" key={`textLine${i}`}>{line}</p>)
            return (line === 'PICTURE' ? <img key={`textLine${i}`} className="inTextRight" src="/media/about/via_egnatia.png" alt="Via Egnatia"></img> : (<span key={`textLine${i}`}>{line}<br></br></span>))
        })
    }

    renderSections = () => {
        const { language } = this.props;
        return dbAbout[language].titles.map((el, i) => {
            return (
                <div className="section" key={`section${i}`}>
                    <h2>{el}</h2>
                    <p>
                        {this.renderText(dbAbout[language].sections[i])}
                    </p>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="about">
                <div className="bgPage" data-background-image-url='/media/home/bg.jpg'></div>
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

export default connect(mapStateToProps)(AboutDDreamkol);