import React from 'react'

import db from '../../db';

const BusSchedule = ({ nameDB, name, language }) => {
    return (
        <div className="bus-schedule">
            <div className="bus-title">
                <p>{name}</p>
                <i className="fas fa-long-arrow-alt-right"></i>
                {language === 'mkd' ? 'Струга' : 'Struga'}
            </div>
            {
                db[nameDB].working.length !== 0 ?
                    <div className="schedule">
                        <p>{language === 'mkd' ? 'Пон / Саб' : 'Mon / Sat'}</p><p>{language === 'mkd' ? 'Нед / Прз' : 'Sun / Hol'}</p>
                        <p>{db[nameDB].working[0]}</p><p>{db[nameDB].holidays[0]}</p>
                        <p>{db[nameDB].working[1]}</p><p>{db[nameDB].holidays[1]}</p>
                        <p>{db[nameDB].working[2]}</p><p>{db[nameDB].holidays[2]}</p>
                        <p>{db[nameDB].working[3]}</p><p></p>
                        <p>{db[nameDB].working[4]}</p><p></p>
                        <p>{db[nameDB].working[5]}</p><p></p>
                    </div>
                    :
                    <div></div>
            }
        </div>
    )
}

export default BusSchedule;