import React, { Fragment } from 'react';
import CountdownTimer from './CountdownTimer';

function CountDown(props) {
    const dateTime = props.startCountdown + new Date().getTime();

    return (props.show ?
        <CountdownTimer targetDate={dateTime} />
        : <Fragment />)
}

export default CountDown;


