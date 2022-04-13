import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact){
    return (
        <Card
            key={contact.id}
            name={contact.name}
            img={contact.imgURL}
            tel={contact.phone}
            email={contact.email}
      />);
}

function App() {
  return (
    <div>
      
      <h1> <span> My Tiles</span></h1>
      {contacts.map(createCard)}
        
    </div>
  );
}

export default App;
