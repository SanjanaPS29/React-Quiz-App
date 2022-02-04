import React, { useContext } from "react";
import { useState } from "react/cjs/react.development";
import { Container } from "../styles/Container.style";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import userContext from '../../App';

function Result() {
  const u=useContext(userContext);
  const [name, setName] = useState("");
  const navigate = useNavigate();


const {user, setUser,addUser}=u;
  const onSubmit = (e) => {
    e.preventDefault();
 addUser()
     navigate("/");
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <Container>
        <form>
          <h2>All done!</h2>

          <p>Your final score is </p>
          <label>Enter initails:</label>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              onChange(e);
            }}
          />
          <button onClick={(e)=>onSubmit(e)}>Submit</button>
        </form>
      </Container>
    </div>
  );
}

export default Result;
