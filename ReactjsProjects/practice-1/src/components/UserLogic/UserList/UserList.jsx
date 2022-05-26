import React from "react";
import "./UserList.css";

const UserList=(props)=>{

    return(
        <p className="frame-p">{props.userName +" ("+ props.age + " years Old)"}</p>
     
    );
}

export default UserList;