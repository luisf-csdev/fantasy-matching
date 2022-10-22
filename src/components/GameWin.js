import React, { Fragment } from 'react';

export default function GameWin(props) {
    return (props.show ?
        <div>
            <div id="gameOver">
                <div>
                    <h1>Congratulations, you've beaten the game!!</h1>
                </div>
                {/* <form id='score-form'>
                    <h3 className='score-title'>SAVE YOUR SCORE</h3>
                    <p className='score-description'>ENTER YOUR INITIALS</p>
                    <input className='score-initials' type='text' placeholder='. . .'></input>
                    <input className='score-submit' type='submit' value='OK'></input>
                </form> */}
                <div id='gameOver-buttons'>
                    <button className='gameOver-button' onClick={props.handleRestart}>PLAY AGAIN</button>
                    <button className='gameOver-button' onClick={props.handleMenu}>MAIN MENU</button>
                </div>
            </div>
        </div> : <Fragment />
    )
}

