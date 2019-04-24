import React from 'react';

const Section = ({ title, content }) => {

    const renderText = (arr, title) => {
        return arr.map((line, i) => {
            return (line.substring(0, 7) === 'PICTURE' ?
                <a key={`textLine${i}`} data-fancybox={title} href={line.split(',')[1]} data-options='{"loop" : true, "buttons": ["close"]}'>
                    <img className="inTextRight" src={line.split(',')[1]} alt="Via Egnatia"></img>
                </a>
                :
                (<span key={`textLine${i}`}>{line}<br></br></span>)
            )
        })
    }

    return (
        < div className="section" >
            <h1 className="section-title">{title}</h1>
            <p className="section-content">{renderText(content, title)}</p>
        </div >
    )
}

export default Section;