import React, { Fragment } from 'react';

// import { Container } from './styles';

export default function GameOver(props) {
    return (props.show ?
        <div>
            <div id="gameOver">
                <div>
                    Congratulations, you've beaten the game!!
                </div>
                <button id="restart" onClick={props.handleRestart}>Play Again</button>
            </div>
        </div> : <Fragment />
    )
}

