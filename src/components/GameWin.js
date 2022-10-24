import React, { Fragment } from 'react';

export default function GameWin(props) {
    return (props.show ?
        <div className='menu'>
            <h1>Congratulations, you've beaten the game!!</h1>
            <div className='menu-btns'>
                <button className='menu-btn' onClick={props.handleRestart}>PLAY AGAIN</button>
                <button className='menu-btn' onClick={props.handleMenu}>MAIN MENU</button>
            </div>
        </div> : <Fragment />
    )
}

