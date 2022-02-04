import React, { useState, useEffect, useContext } from "react";
import { questions } from "../../quiz";
import { Time } from "../styles/Header.style";
import Question from "./Question";
import Result from "./Result";
import Timer from "./Timer";
import ViewHighscores from "./ViewHighscores";


// export const TimerContext= React.createContext();
function Questions() {
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  // const [time,setTimer]= useState(50);
  const handleScore = () => {
    setScore(score + 1);
  };
 
  useEffect(()=>{
    
  
    //   if(time<0) setTimer(50);
    //   <TimerContext value={time}/>
    //   if(!stop){
    //   const interval = setInterval(() => {
    //    setTimer((prev) => prev - 1);
    //  }, 1000) ;
    // }

  },[])
  return (
    <div>
      {/* <Time>Time: <Timer setStop={setStop} questionNumber={questionNumber} /> </Time> */}
      <p>{score}</p>
      {stop ? (
        <Result />
      ) : (
        <>
          {
            <Question
              data={questions}
              questionNumber={questionNumber}
              score={score}
              setScore={setScore}
              setStop={setStop}
              setQuestionNumber={setQuestionNumber}
         
            />
          }
        </>
      )}
    </div>
  );
}

export default Questions;

{
  /* <div>
<p>{result}</p>
{questions.map((question, index) => (

  <Question {...question} key={index} getScore={handleScore} />
 
))}
</div>
); */
}
