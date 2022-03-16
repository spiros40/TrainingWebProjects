
import React from 'react';
import ReactDOM from 'react-dom'
//for js ESS5
// var react=require("react");
// var reactDom=require("react-dom");

let date=new Date();
let time="system error";
let hours=date.getHours();

if(12<=hours && 23>=hours){
    time="good morning";
}else if(18<=hours && 13>=hours){ 
    time="good evening";
}else if(23<=hours && 19>=hours){
    time="good night";
}


ReactDOM.render(
<div> 
    <h1>{time}</h1>  
</div>, 
document.getElementById("root"));

