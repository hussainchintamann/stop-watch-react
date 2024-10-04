import React, { useEffect, useState } from "react";
import "./style.css";
const Timer = () => {
  const [sec, setSec] = useState(0);
  const [mins, setMins] = useState(0);

  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSec(sec + 1);
      if (sec === 59) {
        setMins(mins + 1);
        setSec(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  const restart = () => {
    setMins(0);
    setSec(0);
  };

  const stop = () => {
    clearInterval(timer);
    
  };

  return (
    <>
      <div className="timer w-full h-screen bg-cyan-300 flex justify-center">
        <div className="containers ">
          <div className="timer-container bg-white  ">
            <h1 className=" ">Timer</h1>
            <h1>
              {mins < 10 ? "0" + mins : mins}:{sec < 10 ? "0" + sec : sec}
            </h1>
            {/* <h2>{mins}:{sec}</h2> */}
            <button
              className="restart mt-5 mb-5 text-white bg-cyan-300 text-sm w-24 h-12 border-0 rounded-2xl cursor-pointer "
              onClick={restart}
            >
              Reset
            </button>
            <button
              className="stop mt-5 mb-5 text-white bg-cyan-300 text-sm w-24 h-12 border-0 rounded-2xl cursor-pointer ml-5"
              onClick={stop}
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timer;
