import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import TimeDisplay from './TimeDisplay';
import GameOver from './GameOver';

const ShowCounter = ({ minutes, seconds }) => {
    return (
        <div className="show-counter">
            <TimeDisplay value={minutes} />:<TimeDisplay value={seconds} />
        </div>
    );
};

const CountdownTimer = ({ targetDate }) => {
    const [minutes, seconds] = useCountdown(targetDate);

    return (
        (minutes + seconds <= 0) ? <GameOver /> : <ShowCounter minutes={minutes} seconds={seconds} />
    )
}



export default CountdownTimer;