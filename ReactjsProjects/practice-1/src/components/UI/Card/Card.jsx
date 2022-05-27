import React from "react";
import './Card.css';

const Card=(porps)=>{
    return(
        <div className="cardDiv">
        {/*if i want to use to css styles
         <div `${className="cardDiv">} ${props.className>}` */}
            {porps.children}
        </div>
    );
}

export default Card;