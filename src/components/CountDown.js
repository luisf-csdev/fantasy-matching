import React, { Fragment } from 'react';
import CountdownTimer from './CountdownTimer';

function CountDown(props) {
    const dateTime = props.startCountdown + new Date().getTime();

    return (props.show ?
        <div id='countdown-container'>
            <CountdownTimer targetDate={dateTime} />
        </div> : <Fragment />)
}

export default CountDown;


