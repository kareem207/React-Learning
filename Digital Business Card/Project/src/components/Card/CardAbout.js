import React from 'react';

function CardAbout(props) {
    return (
        <div className='About_section'>
            <h3>About</h3>
            <p>{props.aboutInfo}</p>
        </div>
    );
}

export default CardAbout;