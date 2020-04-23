import React from "react";
import { useTimer } from "react-timer-hook";
import "./App.css";

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called")
  });

  return (
    
      <div className="timer">
        <div>
        <span>{(minutes < 10) ? '0'+minutes: minutes}</span>:
        <span>{(seconds < 10) ? '0'+seconds: seconds}</span>
        </div>
        <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button
        onClick={() => {
          const time = new Date();
          time.setSeconds(time.getSeconds() + 721);
          restart(time);
        }}
      >
        Restart
      </button>
      </div>
      
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 721); 
    

  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
