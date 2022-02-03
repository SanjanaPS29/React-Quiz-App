import React, { useEffect, useState } from "react";
import { Container } from "../styles/Container.style";
import { OptionStyle, ListStyle, HiddenStyle } from "../styles/Question.style";
import { questions } from "../../quiz";

function Question({data,score, setScore, setStop,setQuestionNumber,questionNumber}) {
  const [correct, setCorrect] = useState();
  // const [stop, setStop] = useState(false);
  const [show,setShow] = useState(true);
 const [question,setQuestion]=useState(null);
//  const {data, setTimeout,setQuestionNumber,questionNumber} = props;

  useEffect(()=>{
setQuestion(data[questionNumber-1]);
},[data, questionNumber]);


const delay=(duration,callback) =>{
setTimeout(()=>{
  callback();
},duration);

};

  const checkAnswer = (opt) => {
    const choose = opt.option;

    if(data[questionNumber]==null)
    {
      setTimeout(()=>{
        setStop(true);  
      },300)
    }
    else if(choose == question.answer) {
      setCorrect("Correct!");
      setScore(score+1);
      
      setTimeout(()=>{
       setQuestionNumber((prev)=>prev+1);
     
      setCorrect(null);
      },600);
    }else {
      setCorrect("Incorrect!");
      
    
    }
    // setTimeout(()=>{
    // console.log("answer")
    // },3000)
    // delay(2000,()=>
    // {
    //   if(correct=="Correct!"){
    //     console.log("sdd")
    //   }
    //   // else{
    //   //   // setStop(true)
    //   // }
    // });
    };
      // setTimeout(()=>{
      //     console.log("answer")
  
      // },3000)
   

  return (
    // <HiddenStyle  style={{ display: show ? "block" : "none" }} >
    
      <Container>
        
        <h2>{question?.questionText}</h2>
        <ListStyle>
          {question?.options.map((option, index) => (
            <OptionStyle key={index} onClick={(e) => checkAnswer({ option })}>
              {option}
            </OptionStyle>
          ))}
          <hr />
          <p>{correct}</p>
        </ListStyle>
      </Container>
    // </HiddenStyle>
  );
}

export default Question;


















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






// let timer=0;
// let interval=0;
//   useEffect(() => {
//   setInterval(countDown,1000);
//   }, []);

// const countDown= () =>{
// if(timer === 20){
//   clearInterval(interval);
// }
// else{
//   timer++;
//   console.log(timer);
// }
// }