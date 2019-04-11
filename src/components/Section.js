import React from 'react';

const Section = ({ title, content }) => {
    return (
        < div className="section" >
            <h1 className="section-title">{title}</h1>
            <p className="section-content">{content}</p>
        </div >
    )
}

export default Section;