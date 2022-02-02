import React from "react";
import { HeaderStyle ,View,Time} from "../styles/Header.style";
import { FaHandPointLeft} from 'react-icons/fa';
import { useState } from "react";

 
function Header() {

  const [time,setTime]=useState(0)

  return (
  <div>
<HeaderStyle>

<View>View HighScores<FaHandPointLeft size={20}/></View>
<Time>Time: {time} </Time>
</HeaderStyle>

  </div>);
}

export default Header;
