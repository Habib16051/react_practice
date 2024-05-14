import React, { useState } from "react";
import "./State.css";

const State = () => {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
  return (<>

    <p>Name: {name}</p>
    <button onClick={()=>setName("Habib")}>Set name</button>
    <hr />
    
    <button onClick={()=>setAge(age + 1)}>+</button>
    <p>Age: {age}</p>
    <button onClick={()=>setAge(age - 1)}>-</button>
    <br />
    <button onClick={()=>setAge(0)} className="btn">Reset</button>
  

  </>);
};

export default State;
