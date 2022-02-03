import React from "react";
import { useState } from "react/cjs/react.development";
import { Container } from '../styles/Container.style';
import {useNavigate } from "react-router-dom";

 function Result() {
const [username,setUsername]=useState('');
const navigate = useNavigate();

  const  onSubmit= (e) => {
console.log(username)
e.preventDefault();
navigate('/highscore');
    }

    const onChange=e=>{
        setUsername(e.target.value);
    }

  return (
    <div>
      <Container>
          <form >
        <h2>All done!</h2>
        <p>Your final score is </p>
        <label>Enter initails:</label>
        <input type="text" name="username" onChange={ (e)=>{ onChange(e)} }/>
        <button onClick={e => onSubmit(e)}>Submit</button>
        </form>
      </Container>
    </div>
  );
}

export default Result;