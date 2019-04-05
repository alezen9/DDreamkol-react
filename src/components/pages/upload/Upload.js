import React, { Component } from 'react'
import { withCookies } from 'react-cookie';
import './Upload.css';

class Upload extends Component {
    constructor(props) {
        super();
        this.state = {
            nImages: 0,
            totSize: 0
        }
    }

    data = {
        villages: ['Bezevo', 'Boroec', 'Drenok', 'Dolno Lukovo', 'Gorno Lukovo', 'Jablanica', 'Lakaica', 'Modrich', 'Nerezi', 'Piskupshtina'],
        villagesMK: ['Безево', 'Бороец', 'Дренок', 'Долно Луково', 'Горно Луково', 'Јабланица', 'Лакаица', 'Модрич', 'Нерези', 'Пискупштина']
    }

    handleChange = e => {
        if (e.target.files) {
            let tot = 0;
            for(let i = 0; i < e.target.files.length; i++){
                tot += Number(e.target.files[i].size / 1024 / 1024);
            }
            this.setState({
                nImages: e.target.files.length,
                totSize: tot.toFixed(2)
            })
        }
    }


    render_options = () => {
        const options = this.data.villages.map((el, i) => {
            let val = this.props.cookies.get('language') === 'mkd' ? this.data.villagesMK[i] : el;
            return (
                <option key={i} value={el}>{val}</option>
            )
        });
        return options;
    }


    render() {
        const { cookies } = this.props;

        return (
            <div className="wrapper-upload">
                <form className="form">
                    <span className="label">
                        {cookies.get('language') === 'mkd' ? 'Одбери село:' : 'Select a village:'}
                    </span>
                    <select className="select">
                        {this.render_options()}
                    </select>
                    <input type="file" name="files" id="file" multiple required className="upload" onChange={this.handleChange} />
                    <label htmlFor="file">
                        <i className="fas fa-images"></i>
                        {cookies.get('language') === 'mkd' ? 'Одбери фајлови' : 'Choose files'}
                    </label>
                    <div className="upload-btn upbtn">
                        <i className="far fa-arrow-alt-circle-up"></i>
                        {cookies.get('language') === 'mkd' ? 'Прикачи' : 'Upload'}
                    </div>
                </form>
                <p>
                    {cookies.get('language') === 'mkd' ? 
                        'имате селектирано '
                        :
                        'you have selected '
                    }
                    <span>{this.state.nImages}</span>
                    {cookies.get('language') === 'mkd' ? 
                        this.state.nImages === 1 ? ' фајл' : ' фајлови'
                        :
                        this.state.nImages === 1 ? ' file' : ' files'
                    }
                </p>
            </div>
        )
    }
}

export default withCookies(Upload);