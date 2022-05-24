import React from "react";
import "./UserList.css";

const UserList=(props)=>{

    return(
        <div className="frameDiv">              
            <p className="frame-p">{props.userName +" ("+ props.age + " years Old)"}</p>              
        </div>
    );
}

export default UserList;