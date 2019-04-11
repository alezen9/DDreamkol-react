import React from 'react';

const Tile = ({ src }) => {
    return (
        <div className="tile">
            <img src={src} />
        </div>
    )
}

export default Tile;