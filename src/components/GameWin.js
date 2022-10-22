import React, { Fragment } from 'react';

export default function GameWin(props) {
    return (props.show ?
        <div>
            <div id="gameOver">
                <div>
                    <h1>Congratulations, you've beaten the game!!</h1>
                </div>
                <div id='gameOver-buttons'>
                    <button className='gameOver-button' onClick={props.handleRestart}>PLAY AGAIN</button>
                    <button className='gameOver-button' onClick={props.handleMenu}>MAIN MENU</button>
                </div>
            </div>
        </div> : <Fragment />
    )
}

