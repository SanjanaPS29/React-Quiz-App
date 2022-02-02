import React, { useState, useEffect } from "react";
import { Container } from "../styles/Container.style";
import Questions from "./Questions";

function Home() {
  const [show, setShow] = useState();

  const handleClick = (e) => {
    console.log("ternary");
    setShow(!show);
    console.log(show);
  };

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div>
      <Container style={{ display: show ? "block" : "none" }}>
        <h2>Coding Quiz Challenge</h2>
        <p>
          Try to answer to following code-related questions within the time
          limit.
        </p>
        <p>
          Keep in mind that incorrect answers will penalize your score/time by
          ten seconds!
        </p>
        <button onClick={(e) => handleClick(e)}>Start Quiz</button>
      </Container>
      <div style={{ display: show ? "none" : "block" }}>
        <Questions />
      </div>
    </div>
  );
}

export default Home;

{
  /* <Container style={show ? { display:'block'} : {display : 'none'}}> 
<Container >*/
}
