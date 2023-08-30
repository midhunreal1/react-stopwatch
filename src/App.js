import React, { useState, useRef } from 'react';
import './App.css';

function App() {

  const [time,start,stop,reset] =useStopWatch();
  return (
    <div className="app-container">
      <div className="stopwatch">
        <div className="time">{time}</div>
        <div className="buttons">
          <button className="action-button" onClick={start}>
            Start
          </button>
          <button className="action-button" onClick={stop}>
            Stop
          </button>
          <button className="action-button" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
 
function useStopWatch(){
  const interval =useRef(0)

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      interval.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }}
  const stop = () => {
      clearInterval(interval.current);
      setIsRunning(false);
    }
  const reset = ()=>{
      stop();
      setTime(0)
  }
  return [time,start,stop,reset]
  };