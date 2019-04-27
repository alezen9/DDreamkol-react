import React, { Component } from 'react';
import { connect } from 'react-redux';
import dbAboutUs from './dbAboutUs';
// components
import Section from '../../Section';


class AboutDDreamkol extends Component {

    componentDidMount() { window.scrollTo(0, 0) }

    renderSections = (l) => { return dbAboutUs[l].titles.map((title, i) => <Section key={i} title={title} content={dbAboutUs[l].sections[i]} />) }

    render() {
        const { lng } = this.props;
        return (
            <div className="about">
                <h1 className="name">{lng === 'mkd' ? 'Инфо' : 'About Us'}</h1>
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