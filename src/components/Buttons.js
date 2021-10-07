import React from 'react';
import dice1 from "../images/dice-1.png";

function Buttons() {
    return(
        <div>
            <img src={dice1} alt="Playing dice" className="dice" />
            <button className="btn btnNew">🔄 New game</button>
            <button className="btn btnRoll">🎲 Roll dice</button>
            <button className="btn btnHold">📥 Hold</button>
        </div>
    )
}

export default Buttons;
