import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import TimeDisplay from './TimeDisplay';
import GameOver from './GameOver';

const ShowCounter = ({ minutes, seconds }) => {
    return (
        <div id="countdown">
            <TimeDisplay value={minutes} />:<TimeDisplay value={seconds} />
        </div>
    );
};

const CountdownTimer = ({ targetDate }) => {
    const [minutes, seconds] = useCountdown(targetDate);

    return (
        (minutes + seconds <= 0) ? <GameOver /> : <ShowCounter minutes={'0' + minutes} 
        seconds={seconds >= 10 ? seconds : '0' + seconds } />
    )
}

export default CountdownTimer;