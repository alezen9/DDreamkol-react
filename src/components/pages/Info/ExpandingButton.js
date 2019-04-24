import React, { Component } from 'react';
// css
import './expButton.css';

class ExpandingButton extends Component {
    constructor() {
        super();
        this.state = {
            btnClasslist: 'share-btn'
        }
    }

    shouldComponentUpdate = (nextProps, nextstate) => nextProps.lng !== this.props.lng || nextstate.btnClasslist !== this.state.btnClasslist;

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
        const { btnClasslist } = this.state;
        const { vName, lng, iconClass, location, working, holidays } = this.props;
        return (
            <div className={btnClasslist} onClick={this.expand}>
                <span className="cta">
                    <i className="fas fa-bus"></i>&nbsp;&nbsp; {lng === 'mkd' ? 'Бус' : 'Bus'}
                </span>
                <span className="direction">
                    {vName} → {lng === 'mkd' ? 'Струга' : 'Struga'}
                </span>
                <div className="close ion-close-round" onClick={this.close}>
                    <i className="fas fa-times"></i>
                </div>
                <ul className="social">
                    <li>
                        {lng === 'mkd' ? "Пон - Саб" : "Mon - Sat"}<span>{lng === 'mkd' ? "Нед / Прз" : "Sun / Hol"}</span>
                    </li>
                    {working.length !== 0 ? working.map((orario, i) => <li key={i}>{orario}<span>{holidays[i]}</span></li>) : <div></div>}
                    <span className="btn ok">
                        <i className={iconClass}></i>
                        {iconClass.includes('walk') ? " → " : " "}
                        {location ? lng === "mkd" ? location[1] : location[0] : ""}
                    </span>
                </ul>
            </div>
        )
    }
}

export default ExpandingButton;