import React from "react";
import ReactDOM from "react-dom";
import "./app.css";

export default function App() {
  return (
    <div className="App">
      <h2>What's the secret phrase?</h2>

      <input type="text" placeholder="Super duper secret" />

      <p>
        Hint: It's <strong>open sesame</strong>
      </p>
    </div>
  );
}
