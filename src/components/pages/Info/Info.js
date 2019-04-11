import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
// css
import './Info.css';
import './expButton.css';
// db
import db from './db'
// components
import Section from '../../Section';
import ExpButton from './ExpButton';
import Table from './Table';
import Button from '../../Button';

class Info extends Component {
    constructor(props) {
        super();
        this.state = {
            btnClasslist: 'share-btn',
            village: props.match.params.village
        }
    }

    componentDidMount() { window.scrollTo(0, 0) }

    renderSections = (v, l) => { return db[v][l].titles.map((title, i) => <Section key={i} title={title} content={db[v][l].sections[i]} i={i} />) }

    render() {
        const { lng } = this.props;
        const { village } = this.state;
        return (
            <div className="info-page">
                <h1 className="name">{db[village][lng].name}</h1>
                <Button to={`/gallery/${village}`} iconClass="far fa-images" title={lng === 'mkd' ? "Галерија" : "Gallery"} />
                <ExpButton l={lng} v={village} />
                <Table l={lng} tab={db[village].tab} />
                <div className="sections">
                    {this.renderSections(village, lng)}
                </div>
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

export default connect(mapStateToProps)(withRouter(Info));