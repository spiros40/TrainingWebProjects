import React from "react";
import "./UserList.css";

const UserList=(props)=>{
    console.log(props.UserArrayList[0].age);
    return(
        props.UserArrayList.map((element)=>{
            return (<p className="frame-p" key={element.id}>{element.username +
                " ("+ element.age + " years Old)"}</p>)
                // or i can do it as ul
        })
    );
}

export default UserList;