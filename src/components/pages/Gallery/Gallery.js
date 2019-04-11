import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
// components
import Loader from '../../Loader';
import Button from '../../Button';
// db
import db from '../Info/db';
// css
import './Gallery.css';


class Gallery extends Component {
    constructor(props) {
        super();
        const { village } = props.match.params;
        this.state = {
            name: village.split('_').map(el => (el.charAt(0).toUpperCase() + el.slice(1))).join('%20'),
            done: false
        }
    }

    componentDidMount() {
        fetch('http://192.168.0.3:5000/api/getPhotos/' + this.state.name)
            .then(res => res.json())
            .then(data => {
                if (Array.from(data).length !== 0) {
                    let big = data.map(el => el.images[0].source)
                    this.setState({ big: big })
                }
                this.setState({ done: true })
            })
            window.scrollTo(0,0);
    }

    renderPics = () => {
        const { big } = this.state;
        return big.map((el, i) => {
            return (
                <a key={i} data-fancybox="gallery" href={el} data-options='{"loop" : true, "buttons": ["close"]}' className="img">
                    <img alt="" src={el} />
                </a>
            )
        })
    }

    render() {
        const { big, done } = this.state;
        const { lng } = this.props;
        const { village } = this.props.match.params;
        return (
            <div className="gallery-page">
                <h1 className="name">{db[village][lng].name}</h1>
                <Button to={`/info/${village}`} iconClass="fas fa-book" title={lng === 'mkd' ? "Инфо" : "Info"} />
                <div className="gallery">
                    {
                        big && done ?
                            this.renderPics()
                            :
                            done ? <div>There are no pictures.</div> : <Loader />
                    }
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

export default connect(mapStateToProps)(withRouter(Gallery));