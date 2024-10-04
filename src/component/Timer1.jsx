import React, { useEffect, useState } from "react";

const Timer1 = () => {
  const [minutes,setMinutes]= useState(1)
  const [second, setSecond] = useState(59);
  
  var timer;

  useEffect(()=>{
    timer = setInterval(()=>{
        setSecond(second-1)
        if(second===0){
            setSecond(59)
            setMinutes(0)
            
        }
        
    },1000)
  
    return ()=> clearInterval(timer)
  })

  return (
    <div>
      <div className="timer">
        <div className="container">
          <div className="timer-container">
            <h1>Timer</h1>
            <h2>{minutes < 10 ? '0' + minutes:minutes}:{second }</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer1;
