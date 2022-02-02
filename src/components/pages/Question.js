import React, { useEffect, useState } from "react";
import { Container } from "../styles/Container.style";
import { OptionStyle, ListStyle, HiddenStyle } from "../styles/Question.style";

function Question(props) {
  const [correct, setCorrect] = useState();
  const [timer, SetTimer] = useState(false);
  const [show,setShow] = useState(true);

  useEffect(() => {
    let i=5;
   setTimeout(() => {
    fun(i);
    i++;
    }, i*1000);
  }, []);

function fun(i){
  setShow(!show);
}



  const checkAnswer = (opt) => {
    const choose = opt.option;

    if (choose == answer) {
      setCorrect("Correct!");
      getScore();
    } else {
      setCorrect("Incorrect!");
    }
  };
  const { questionText, options, answer, getScore } = props;
  return (
    <HiddenStyle  style={{ display: show ? "block" : "none" }} >
      <Container>
        <h2>{questionText}</h2>
        <ListStyle>
          {options.map((option, index) => (
            <OptionStyle key={index} onClick={(e) => checkAnswer({ option })}>
              {option}
            </OptionStyle>
          ))}
          <hr />
          <p>{correct}</p>
        </ListStyle>
      </Container>
    </HiddenStyle>
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