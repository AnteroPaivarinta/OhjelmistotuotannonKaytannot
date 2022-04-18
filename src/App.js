import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Attendance from './components/Attendance.js';

function App() {
 
  let x=new Attendance("joo","hei" );
  console.log("jep: ",x.getDate());
  var cors = require('cors');
  const [id, setID]=useState("");
  const [key, setKey]=useState("");
  const [move, setMove]=useState("");
  const send=()=>{
    let object=new Attendance(id, key);
    console.log(object)

    axios
    .post('http://localhost:3001/lasnaolot', object)
    .then(response => {
      console.log("from client", response)
    })
  }
  const handleIdChange=(event)=>{
    setID(event.target.value);
    
  }

  const handleKeyChange=(event)=>{
    setKey(event.target.value);
  }
  
  return (
    
    <div className="App">
      id: 
      
       <input
            type="text"
            value={id}
            onChange={handleIdChange}
         />

key:
          <input
            type="text"
            value={key}
            onChange={handleKeyChange}
         />
       
         <button onClick={send}>SEND</button>
    </div>
  );
}

export default App;
