import React from "react";
import Tiles from "./Tiles";
import emojipedia from "./emojipedia";

// function createEmoji(emoji){
//     return (
//         <Tiles
//             key={emoji.id}
//             emoji={emoji.emoji}
//             name={emoji.name}
//             meaning={emoji.meaning}
//         />);
// }

function App(){
    return(
        <div>
            <h1 className="heading">My Emojis</h1>
            {emojipedia.map(emoji => 
        <Tiles
            key={emoji.id}
            emoji={emoji.emoji}
            name={emoji.name}
            meaning={emoji.meaning}
        />
)}
        </div>);
}


export default App;
