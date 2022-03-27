import React from 'react';

function Heading(){

let date=new Date();
let time;
let hours=date.getHours();
let styleCSS={color:"black"};

if(12>=hours && 23>hours){
    time="good morning";
    styleCSS.color="red";    
}else if(18>=hours && 13<=hours){ 
    time="good evening";
    styleCSS.color="green";
}else if(23>hours && 19<hours){
    time="good night";
    styleCSS.color="blue";
}else{
    time="system error";
    styleCSS.color="yellow";
};


    return <h1 className='header' style={styleCSS} >{time}</h1>;
}

export default Heading;