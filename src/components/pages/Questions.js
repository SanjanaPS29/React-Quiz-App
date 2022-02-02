import React, { useState, useEffect } from "react";
import { questions } from "../../quiz";
import Question from "./Question";

function Questions() {
  // const [timer, SetTimer] = useState(false);
  // const [counter, setCounter] = useState(0);
  const [result, setResult] = useState(0);

  // useEffect(() => {
  //   let interval;
  //   if (timer) {
  //     interval = setInterval(() => {
  //       console.log("In setInterval");
  //     }, 1000);
  //   } else {
  //     clearInterval(interval);
  //   }
  //   return () => clearInterval(interval);
  // }, [timer]);

  const handleScore = () => {
    setResult(result + 1);
  };

  return (
    <div>
      <p>{result}</p>
      {questions.map((question, index) => (
     
        <Question {...question} key={index} getScore={handleScore} />
       
      ))}
    </div>
  );
}

export default Questions;
