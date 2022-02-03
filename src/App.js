import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/pages/Header";
import Home from "./components/pages/Home";
import Questions from "./components/pages/Questions";
import ViewHighscores from "./components/pages/ViewHighscores";
import Result from "./components/pages/Result";
import Timer from "./components/pages/Timer";

function App() {
  const [show, setShow] = useState();
  const [stop, setStop] = useState(false);

  return (
    <Router>
    <div className="App">
    <Header Timer={Timer}/>
   <Routes>
      <Route path="highscore" element={<ViewHighscores/>} />
      <Route path="questions" element={<Questions />} />
      <Route path="result" element={<Result/>} />
      <Route path="/" element={<Home/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
