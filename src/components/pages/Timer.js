import React, { useState } from 'react';
import { useEffect } from 'react';

 function Timer({setStop,questionNumber}) {
  const [timer,setTimer]=useState(1000);
  
useEffect(() =>{
  if(timer === 0) return setStop(true);
const interval=setInterval(() =>{
    setTimer((prev)=>prev-1);
},1000)
},[setStop,timer]);

useEffect(()=>{
  setTimer(50);
},[questionNumber]);

  return timer;
 }
export default Timer;