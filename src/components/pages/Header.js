import React from "react";
import { HeaderStyle ,View,Time,LinkStyle} from "../styles/Header.style";
import { FaHandPointLeft} from 'react-icons/fa';
import { useState } from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer";
 
function Header({setStop,questionNumber}) {

  const [time,setTime]=useState(0)
  return (
  <div>
<HeaderStyle>

<Link to='highscore'><View>View HighScores<FaHandPointLeft size={20}/></View></Link>
<Time>Time: </Time>
{/* <Timer  setStop={setStop} questionNumber={questionNumber}/> */}
{/* <Timer /> */}
</HeaderStyle>

  </div>);
}

export default Header;
