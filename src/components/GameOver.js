import React from 'react';

function refresh(target) {
    if (target)
        window.location.reload()
    else
        return
}

export default function GameOver() {
    return (
        <div className='menu'>
            <div className='menu-container'>
                <h1 className='menu-title'>GAME OVER</h1>
                <p className='desc'>you've run out of time...</p>
                <div className='menu-btns'>
                    <button className='menu-btn' onClick={refresh}>TRY AGAIN</button>
                </div>
            </div>
        </div>
    )
}