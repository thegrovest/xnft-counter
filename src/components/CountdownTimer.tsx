import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from '../hooks/useCountdown';
import './CountdownTimer.css';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a
        href="https://tapasadhikary.com"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </a>
    </div>
  );
};


const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown("2023-08-30yaraT12:00:00-07:00");

  return (
     <div className="countdown-timer-background">
        {days + hours + minutes + seconds <= 0 ? (
           <ExpiredNotice />
        ) : (
           <ShowCounter
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
           />
        )}
     </div>
  );
};

export default CountdownTimer;
