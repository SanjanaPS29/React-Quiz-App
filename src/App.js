import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import { useState,useEffect ,createContext} from "react";
import "./App.css";
import Header from "./components/pages/Header";
import Home from "./components/pages/Home";
import Questions from "./components/pages/Questions";
import ViewHighscores from "./components/pages/ViewHighscores";
import Result from "./components/pages/Result";
import Timer from "./components/pages/Timer";
import TimeContext from './components/pages/Header'


export const userContext=createContext()
function App() {


const [username,setUsername]= useState();
setUsername([
  {
    name: "san",
    score: 54,
  },
  {
    name: "san",
    score: 54,
  },
]);

const addUsers=()=>{
let newInput= {name: "sddd",score:40}
this.setUsername({users: [...username,newInput]});
}
const valu={
user:username,
setUser:setUsername,
addUser:addUsers
}


  return (
    <Router>
    <div className="App">
  
    {/* <Timer setStop={setStop}/> */}
  <Header/>
 < userContext.Provider value={valu}/> 
   <Routes>
   
      <Route path="highscore" element={<ViewHighscores users={username}/>} />
      <Route path="questions" element={<Questions />} />
      <Route path="result" element={<Result/>} />
      {/* <Route path="result" element={<Result  users={users} addUser={addUser}/> } /> */}
      <Route path="/" element={<Home/>} />
     
      </Routes>
   {/* </userContext.Provider> */}
    </div>

    </Router>
  );
}


export default App;

