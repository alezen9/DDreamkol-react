import React from 'react';
import { Link } from 'react-router-dom';


const Button = ({ to, iconClass, title, btnClasses='' }) => {
    return (
        <Link to={to} className={`btn ${btnClasses}`}>
            <i className={iconClass}></i>
            {title}
        </Link>
    )
}


export default Button;