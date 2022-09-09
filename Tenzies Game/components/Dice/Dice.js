import React from 'react';
import './Dice.css'
function Dice(props) {
    const styles = {
        backgroundColor: props.checkfreezed ? "#59E391" : "white"
    }

    return (
        <div 
        className='Dice' 
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

export default Dice;
