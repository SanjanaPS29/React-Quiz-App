import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { Container } from '../styles/Container.style';
import { List } from '../styles/ViewHighscores.style';
import { Link } from "react-router-dom";

function ViewHighscores() {

const [users,setUsers]=useState([]);

useEffect(() => {
  setUsers([{
    name:'san',
    score:54
    },
    {
      name:'san',
      score:54
      }
    ]);
},[])

  return (
  <div>
<Container>
  
  <h1>Highscores</h1>
  <ul>
  { 
  users.map((user,index) =>(
    <List key={index}>{index+1}. {user.name} - {user.score}</List>
  ))
}
</ul>
<Link to='/'><button>Go Back</button></Link> <button>Clear Highscores</button>
</Container>
  </div>
  );
}

export default ViewHighscores;