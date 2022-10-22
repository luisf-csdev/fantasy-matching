import React from 'react';

function refresh(target) {
    if (target)
        window.location.reload()
    else
        return
}

export default function GameOver() {
    return (
        <div>
            <div id="gameOver">
                <div>
                    <h1>GAME OVER</h1>
                    <p id='gameOver-description'>you've run out of time...</p>
                </div>
                <div id='gameOver-buttons'>
                    <button className='gameOver-button' onClick={refresh}>TRY AGAIN</button>
                </div>
            </div>
        </div>
    )
}