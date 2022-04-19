import React from "react";
import Login from "./Login";

var isLoginIn=false;


function App() {
  return (
    <div className="container">
      {isLoginIn ?<h1>Hello</h1>:<Login/> }  
    </div>
  );
}

export default App;