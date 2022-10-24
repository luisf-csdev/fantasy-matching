import React, { Fragment } from 'react';

function StartMenu(props) {
    return (props.show ?
        <div className='menu menu-bg'>
            <div className='menu-container'>
                <h1 className='menu-title'>Fantasy Matching</h1>
                <div className='menu-btns'>
                    <button className='menu-btn' onClick={props.handleStart}>START</button>
                    <a href='https://github.com/luisf-csdev/match-game'>
                        <button className='menu-btn'>ABOUT</button>
                    </a>
                </div>
            </div>
            <ul id='msg'>
                <li id='experience'>For better experience, toggle to fullscreen (F11)</li>
            </ul>
        </div>
        : <Fragment />)
}

export default StartMenu;