import "./Main.css"
import Dice from "./Diec/Diec";
import Confetti from 'react-confetti'
import { useEffect, useState } from "react";

function MainSection(props) {

    const [diceIcons,setDiceIcons] = useState(createAllNewDices());
    const [tenzies,setTenzies] = useState(false);

    useEffect(()=>{       
        const firstDice = diceIcons[0];
        const checkAllFreezed = diceIcons.every((item)=> item.checkfreezed === true);
        const checkAllHaveSamevalue = diceIcons.every((item)=>firstDice.value === item.value)
        if(checkAllFreezed && checkAllHaveSamevalue) setTenzies(true)
        else setTenzies(false)

    },[diceIcons])

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function createAllNewDices(){
        const diceArr = [];
        for (let index = 0; index < 10; index++) {
            diceArr.push({
                value : getRandomInt(6),
                checkfreezed : false,
                id : index
            })        
        }
        return diceArr

    }

    function updateDiceState(id){
        setDiceIcons((fullArr)=>{
            return fullArr.map((arrElement)=>{
                return  arrElement.id === id? {...arrElement, "checkfreezed" : !arrElement.checkfreezed } : arrElement
            })
        })
    }

    function roll(){
        setDiceIcons((fullArr)=>{
            return fullArr.map((arrElement)=>{
                return  arrElement.checkfreezed === false? {...arrElement, "value" : getRandomInt(6) } : arrElement
            })
        })
    }

    function reset(){
        setDiceIcons(createAllNewDices())
    }


    let DiecsVar = diceIcons.map(val=>(
        <Diec 
        number = {val.value}
        checkfreezed = {val.checkfreezed}
        id={val.id}
        key ={val.id}
        changeState={()=> updateDiceState(val.id)}
        />
    ))
    
    


    return (
        <div className="flexContainer">
            <div className="mainBlock">
                <h1>Tenzies</h1>

                {tenzies!=true?
                <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                :
                <p>Wow, Congratulation you have just won the game click the button to restart</p>
                }

                <div className="DiceSection">
                    {DiecsVar}                
                </div>
                {tenzies!=true?
                <button className="RollButt" onClick={roll}>Roll</button>
                :
                <button className="RollButt" onClick={reset}>New Game</button>
                }

                {tenzies && <Confetti />}
            </div>
        </div>
    );
}

export default MainSection;
