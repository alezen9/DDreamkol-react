import React, { Component } from 'react';
import db from './db'

class ExpButton extends Component {
    constructor(props) {
        super();
        this.state = {
            btnClasslist: 'share-btn',
            lng: props.l,
            village: props.v,
            iconClass: db[props.v].from ? "fas fa-map-marker-alt" : "fas fa-walking",
            indicator: db[props.v].indicator
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.lng !== nextProps.l || prevState.village !== nextProps.v) {
            return {
                lng: nextProps.l,
                village: nextProps.v,
                iconClass: db[nextProps.v].from ? "fas fa-map-marker-alt" : "fas fa-walking",
                indicator: db[nextProps.v].indicator
            }
        }
        return { ...prevState };
    }

    expand = e => {
        if (this.state.btnClasslist === 'share-btn') {
            this.setState({
                btnClasslist: 'share-btn clicked'
            })
        }
    }

    close = e => {
        e.stopPropagation();
        if (this.state.btnClasslist === 'share-btn clicked') {
            this.setState({
                btnClasslist: 'share-btn'
            })
        }
    }

    render() {
        const { village, lng, iconClass, indicator } = this.state;
        return (
            <div className={this.state.btnClasslist} onClick={this.expand}>
                <span className="cta">
                    <i className="fas fa-bus"></i>&nbsp;&nbsp; {lng === 'mkd' ? 'Бус' : 'Bus'}
                </span>
                <span className="direction">
                    {lng ? db[village][lng].name : ""} → {lng === 'mkd' ? 'Струга' : 'Struga'}
                </span>
                <div className="close ion-close-round" onClick={this.close}>
                    <i className="fas fa-times"></i>
                </div>
                <ul className="social">
                    <li>
                        {lng === 'mkd' ? "Пон - Саб" : "Mon - Sat"}
                        <span>
                            {lng === 'mkd' ? "Нед / Прз" : "Sun / Hol"}
                        </span>
                    </li>
                    {
                        village ?
                            db[village].working.length !== 0 ?
                                db[village].working.map((orario, i) => {
                                    return (
                                        <li key={i}>{orario}<span>{db[village].holidays[i]}</span></li>
                                    )
                                })
                                :
                                <div></div>
                            :
                            <div></div>
                    }
                    <span className="btn ok">
                        <i className={iconClass}></i>
                        {iconClass.includes('walk') ? " → " : " "}
                        {
                            indicator ?
                                lng === "mkd" ? db[village][indicator][1] : db[village][indicator][0]
                                :
                                ""
                        }
                    </span>
                </ul>
            </div>
        )
    }
}

export default ExpButton;