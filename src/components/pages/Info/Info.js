import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
// defer bg images
import { BackgroundLazyLoader } from '../../../deferImgs';
// css
import './Info.css';
import './expButton.css';

import db from './db'
// components
import Sections from './Sections';
import ExpButton from './ExpButton';

class Info extends Component {
    constructor(props) {
        super();
        this.state = {
            btnClasslist: 'share-btn',
            village: props.match.params.village

        }
    }

    componentDidMount() { BackgroundLazyLoader() }

    render() {
        const { lng } = this.props;
        const { village } = this.state;
        return (
            <div className="info-page">
                <div className="bgPage" data-background-image-url='/media/home/bg.jpg'></div>
                <h1 className="name">{db[village][lng].name}</h1>
                <Link to={`/gallery/${village}`} className="img-btn">
                    <i className="far fa-images"></i>
                    {lng === 'mkd' ? "Галерија" : "Gallery"}
                </Link>
                {
                    lng ?
                        <ExpButton l={lng} v={village} />
                        :
                        <div></div>
                }
                {
                    lng ?
                        <div className="idCard">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <i className="fas fa-arrows-alt-v"></i>
                                            {lng === 'mkd' ? 'Височина' : 'Height'}
                                        </td>
                                        <td>{db[village].tab[0]}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i className="fas fa-users"></i>
                                            {lng === 'mkd' ? 'Население' : 'Population'}
                                        </td>
                                        <td>{db[village].tab[1]}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i className="fas fa-envelope-open"></i>
                                            {lng === 'mkd' ? 'П. Код' : 'P. Code'}
                                        </td>
                                        <td>6337</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        :
                        <div></div>
                }
                {
                    lng ?
                        <Sections l={lng} v={village} />
                        :
                        <div></div>
                }
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