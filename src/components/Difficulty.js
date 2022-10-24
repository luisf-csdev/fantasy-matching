import React, { Fragment } from 'react';

function Difficulty(props) {
    return (props.show ?
        <div className='menu menu-bg'>
            <div className='menu-container'>
                <h1 id='difficulty-title'>Choose your Difficulty</h1>
                <div className='menu-btns'>
                    <button className='menu-btn difficulty-btn' onClick={props.handleEasy}>EASY</button>
                    <button className='menu-btn difficulty-btn' onClick={props.handleNormal}>NORMAL</button>
                    <button className='menu-btn difficulty-btn' onClick={props.handleHard}>HARD</button>
                </div>
            </div>
        </div>
        : <Fragment />)
}

export default Difficulty;