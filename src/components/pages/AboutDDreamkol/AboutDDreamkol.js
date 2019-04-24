import React, { Component } from 'react';
import { connect } from 'react-redux';
import dbAbout from './dbAbout';
// components
import Section from '../../Section';
// css
import './AboutDDreamkol.css';

// const myObj = {
//     1: [
//         {
//             company: 'beli mugri',
//             daily: true,
//             stops: ['dl', 'piskupshtina', 'nerezi'],
//             working: ['00:00', '00:00'],
//             holydays: ['01:00', '10:00']
//         },
//         {
//             company: 'mugri',
//             daily: true,
//             stops: ['dl', 'piskupshtina', 'nerezi'],
//             working: ['00:00', '00:00'],
//             holydays: ['01:00', '10:00']
//         },
//         {
//             company: 'beli',
//             daily: true,
//             stops: ['dl', 'piskupshtina', 'nerezi'],
//             working: ['00:00', '00:00'],
//             holydays: ['01:00', '10:00']
//         }
//     ]
// }

class AboutDDreamkol extends Component {

    componentDidMount() { window.scrollTo(0, 0) }

    renderSections = (l) => { return dbAbout[l].titles.map((title, i) => <Section key={i} title={title} content={dbAbout[l].sections[i]} />) }

    render() {
        const { lng } = this.props;
        return (
            <div className="about">
                <h1 className="name">{lng === 'mkd' ? 'За Долни Дримкол' : 'About Dolni Drimkol'}</h1>
                {this.renderSections(lng)}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        lng: state.language,
        ...ownProps
    }
}

export default connect(mapStateToProps)(AboutDDreamkol);