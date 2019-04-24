import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
// css
import './Info.css';
// db
import db from './db'
// components
import Section from '../../Section';
import ExpandingButton from './ExpandingButton';
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

    renderSections = (v, l) => { return db[v][l].titles.map((title, i) => <Section key={i} title={title} content={db[v][l].sections[i]}/>) }

    render() {
        const { lng } = this.props;
        const { village } = this.state;
        return (
            <div className="info-page">
                <h1 className="name">{db[village][lng].name}</h1>
                <Button to={`/gallery/${village}`} iconClass="far fa-images" title={lng === 'mkd' ? "Галерија" : "Gallery"} />
                <ExpandingButton
                    lng={lng}
                    vName={db[village][lng].name}
                    working={db[village].working}
                    holidays={db[village].holidays}
                    location={db[village][db[village].indicator]}
                    iconClass={db[village].from ? "fas fa-map-marker-alt" : "fas fa-walking"}
                />
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