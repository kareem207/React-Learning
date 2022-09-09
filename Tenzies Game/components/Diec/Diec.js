import React from 'react';
import './Diec.css'
function Diec(props) {
    const styles = {
        backgroundColor: props.checkfreezed ? "#59E391" : "white"
    }

    return (
        <div 
        className='Diec' 
        style={styles} 
        onClick={props.changeState} 
        id={props.id}
        >
            <p className='die-num' >
                {props.number}
            </p>
        </div>
    );
}

export default Diec;
