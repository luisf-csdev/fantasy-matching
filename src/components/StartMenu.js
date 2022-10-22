import React, { Fragment } from 'react';

function StartMenu(props) {
    return (props.show ?
        <div className='menu'>
            <div className='menu-container'>
                <h1 id='menu-title'>Fantasy Matching</h1>
                <div className='menu-buttons'>
                    <button className='menu-button' onClick={props.handleStart}>START</button>
                </div>
            </div>
        </div>
        : <Fragment />)
}

export default StartMenu;