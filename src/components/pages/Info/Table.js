import React, { Component } from 'react'

class Table extends Component {
    render() {
        const { l, tab } = this.props;
        return (
            <div className="idCard">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <i className="fas fa-arrows-alt-v"></i>
                                {l === 'mkd' ? 'Височина' : 'Height'}
                            </td>
                            <td>{tab[0]}</td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fas fa-users"></i>
                                {l === 'mkd' ? 'Население' : 'Population'}
                            </td>
                            <td>{tab[1]}</td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fas fa-envelope-open"></i>
                                {l === 'mkd' ? 'П. Код' : 'P. Code'}
                            </td>
                            <td>6337</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;