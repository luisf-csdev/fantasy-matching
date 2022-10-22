import React, { Fragment } from 'react';

function Difficulty(props) {
    return (props.show ?
        <div className='menu'>
            <div className='menu-container'>
                <h1 id='difficulty-title'>Choose your Difficulty</h1>
                <div className='menu-buttons'>
                    <button className='menu-button difficulty-btn' onClick={props.handleEasy}>EASY</button>
                    <button className='menu-button difficulty-btn' onClick={props.handleNormal}>NORMAL</button>
                    <button className='menu-button difficulty-btn' onClick={props.handleHard}>HARD</button>
                </div>
            </div>
        </div>
        : <Fragment />)
}

export default Difficulty;