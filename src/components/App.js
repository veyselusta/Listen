import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./app.css";

export default function App() {
  const [name, setName] = useState("")

  const keep = (e)=>{setName(e.target.value)}

  const match = ()=>{name=="open sesame" ? alert("You won") : alert("Try again")}

  return (
    <div className="App">
      <h2>What's the secret phrase?</h2>

      <input 
        className="box"
        type="text" 
        placeholder="Super duper secret"
        onChange={keep}
        />

        <button className="box" onClick={match}>click</button>

      <p>
        Hint: It's <strong>open sesame</strong>
      </p>

    </div>
  );
}
