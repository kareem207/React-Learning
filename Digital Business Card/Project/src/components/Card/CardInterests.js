import React from 'react';

function CardInterests(props) {
    return (
        <div>
            <div className='About_section'>
            <h3>Interests</h3>
            <p>{props.interestsInfo}</p>
        </div>

        </div>
    );
}

export default CardInterests;