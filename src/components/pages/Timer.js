import React, { useState } from 'react';
import { useEffect } from 'react';

 function Timer() {
  const [count,setCount]=useState(1)
  
useEffect(() =>{

const Interval=setInterval(() =>{
    setCount(count+1)
},1000)
},[])

  return (
  <div>
     <p> sdds{count}</p>
  </div>);
}

export default Timer;