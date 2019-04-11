import React, { Component } from 'react';
import { connect } from 'react-redux';
import dbAbout from './dbAbout';
// components
import BusVillages from './BusVillages';
// css
import './AboutDDreamkol.css';

class AboutDDreamkol extends Component {

    componentDidMount() { window.scrollTo(0, 0) }

    renderText = (arr) => {
        return arr.map((line, i) => {
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
        const { language } = this.props;
        return (
            <div className="about">
                <BusVillages lng={language} />
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