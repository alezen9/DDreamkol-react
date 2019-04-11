import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
// components
import Masonry from './Masonry';
import Loader from '../../Loader';
// defer bg images
import { BackgroundLazyLoader } from '../../../deferImgs';
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
        BackgroundLazyLoader();
        fetch('http://localhost:5000/api/getPhotos/' + this.state.name)
            .then(res => res.json())
            .then(data => {
                if (Array.from(data).length !== 0) {
                    let big = data.map(el => el.images[0].source)
                    this.setState({ big: big })
                }
                this.setState({ done: true })
            })
    }

    isEmpty = (obj) => { Object.keys(obj).every(k => !Object.keys(obj[k]).length) }


    renderPics = () => {
        const { big } = this.state;
        return big.map((el, i) => {
            return (
                <div className="tile" key={i}>
                    <a data-fancybox="gallery" href={el} data-options='{"loop" : true, "buttons": ["close"]}' className="masonry-content">
                        <img alt="" src={el} />
                    </a>
                </div>
            )
        })
    }

    render() {
        const { big, done } = this.state;
        const { lng } = this.props;
        const { village } = this.props.match.params;
        return (
            <div className="gallery-page">
                <div className="bgPage" data-background-image-url='/media/home/bg.jpg'></div>
                <h1 className="name">{db[village][lng].name}</h1>
                <Link to={`/info/${village}`} className="img-btn">
                    <i className="fas fa-book-open"></i>
                    {lng === 'mkd' ? "Инфо" : "Info"}
                </Link>
                {
                    big && done ?
                        < div className="container">
                            <div className="masonry-container">
                                <Masonry brakePoints={[350, 500, 750]}>
                                    {this.renderPics()}
                                </Masonry>
                            </div>
                        </div>
                        :
                        done ? <div>There are no pictures.</div> : <Loader />
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

export default connect(mapStateToProps)(withRouter(Gallery));