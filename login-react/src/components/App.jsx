import React from "react";
import Login from "./Login";

var isLoginIn=false;

function message(){
  if(isLoginIn){
    return(<h1>Hello</h1>)
  }else{
    return(<Login/>);
  }}
  
function App() {
  return (
    <div className="container">
      {message()}                  
    </div>
  );
}

export default App;