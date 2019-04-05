import React, { Component } from 'react'
import db from './db';

class Sections extends Component {
    constructor() {
        super();
        this.state = {
            lng: '',
            village: ''
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.lng !== nextProps.l || prevState.village !== nextProps.v) {
            return {
                lng: nextProps.l,
                village: nextProps.v
            };
        }
        return null;
    }

    render() {
        const { village, lng } = this.state;
        return (
            <div className="sections">
                {
                    lng ?
                        db[village][lng].titles.map((title, i) => {
                            return (
                                < div key={i} className="section" >
                                    <h1 className="section-title">{title}</h1>
                                    <p className="section-content">{db[village][lng].sections[i]}</p>
                                </div >
                            )
                        })
                        :
                        <div></div>
                }
            </div>
        )
    }
}

export default Sections;