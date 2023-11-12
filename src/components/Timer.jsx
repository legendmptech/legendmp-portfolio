import React from 'react';
import { useCountdown } from './../hooks/useCountdown'
import "./../styles/timer.css"
//https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks
const Timer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};
const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Expired!!!</span>
            <p>Please select a future date and time.</p>
        </div>
    );
};
const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
        <div className={isDanger ? 'countdown danger' : 'countdown'}>
            <p>{value}</p>
            <span>{type}</span>
        </div>
    );
};
const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="show-counter">
            <span
                target="_blank"
                rel="noopener noreferrer"
                className="countdown-link flex flex-row"
            >
                <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 1} />
                <p> : </p>
                <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
                <p> : </p>
                <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
                <p> : </p>
                <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
            </span>
        </div>
    );
};
export default Timer