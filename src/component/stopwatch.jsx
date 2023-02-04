import React, { useState,useEffect } from "react";
import "./stopwatch.css";
import Timer from "./timer";

  
function StopWatch() {
  
  
  const [time, setTime] = useState(0);
  
  useEffect(() => {
     let interval = null;
  
    if (localStorage.getItem("token") ) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  },[] );
  
  
  
  
  
  
  return (
    <span className="stop-watch">
      <Timer time={time} />
      
    </span>
  );
}
  
export default StopWatch;