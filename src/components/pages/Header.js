import React, { useContext, useEffect } from "react";
import { HeaderStyle, View, Time } from "../styles/Header.style";
import { FaHandPointLeft } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

import Timer from "./Timer";
import Question from "./Question";
import { Children } from "react";
// import { TimerContext } from "./Questions";

// export const TimeContext= React.createContext()

function Header() {
 // const tim=useContext(TimeContext);
  const [time,setTimer]= useState(50);
useEffect(()=>{

{/* <TimeContext.Provider value={{reduceTime}}></TimeContext>  */}
  if(time<0) setTimer(50);
  //  <TimeContext.Provider value={{time,reduceTime}}><Question/></TimeContext.Provider>
  const interval = setInterval(() => {
   setTimer((prev) => prev - 1);
 }, 2000) ;

},[])




  return (
    <div>
      <HeaderStyle>
        <Link to="highscore">
            View HighScores
            <FaHandPointLeft size={20} />
         </Link>
        <Time>
          {/* Time : {`${time!=undefined?time:' '}`} */}
           Time: <Timer time={time} setTimer={setTimer}/>
          {/* Time:{` ${timer} `} */}
          {/* <countContext.Consumer>
  {timer =><span>{timer}</span>}
</countContext.Consumer>   */}

        
        </Time>
        {/* <Timer  setStop={setStop} questionNumber={questionNumber}/> */}
        {/* <Timer /> */}
      </HeaderStyle>
    
    </div>
  );
}

export default Header;
