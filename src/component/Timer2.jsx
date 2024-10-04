import React, { useEffect, useState } from "react";

const Timer2 = () => {
  const [time, setTime] = useState(90);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (time && isActive > 0) {
      interval = setInterval(() => {
        setTime(time-1)

      }, 1000);
    }
    else if (time === 0){
     clearInterval(interval)
     alert("times ups")
    }

    return ()=> clearInterval(interval)
  });

  const formatTime = (seconds)=>{
  const mints = Math.floor(seconds/60)
  // console.log(mints)
  const remainingSec = seconds%60 
  // console.log(remainingSec)
  return `${mints} : ${remainingSec < 10 ? '0'+remainingSec:remainingSec}`
  }

  return <div>{formatTime(time)} </div>;
};

export default Timer2;
