import React from 'react';


function Player1() {
    return(
        <section className="player player--0 player--active">
            <h2 className="name" id="name--0">Player 1</h2>
            <p className="score" id="score--0">0</p>
            <div className="current">
            <p className="current-label">Current</p>
            <p className="current-score" id="current--0">0</p>
            </div>
        </section>
    )
}

export default Player1;
