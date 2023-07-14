import React, { useState, useEffect } from 'react';

interface Props {
    maxTime: number; // максимальное время в секундах
    onTimeUp: () => void; // обработчик события при достижении максимального времени
}

const Timer: React.FC<Props> = ({ maxTime, onTimeUp }) => {
    const [time, setTime] = useState(maxTime);
    const [isTimerActive, setIsTimerActive] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [isTimerActive]);

    useEffect(() => {
        if (time === 0 && onTimeUp) {
            onTimeUp();
            setIsTimerActive(false)
        }
    }, [time, onTimeUp]);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <div>
            <p>{`${minutes}:${seconds.toString().padStart(2, '0')}`}</p>
        </div>
    );
};

export default Timer;