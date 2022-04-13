import React from "react";


function Tiles(props){
    return( 
        <div>
            <dl className="dictionary">
            <div className="term">
                <dt> 
                    <span className="emoji" role="img" aria-label="Tense Biceps">{props.emoji}</span>
                    <span>{props.name}</span>
                </dt>
                <dd>{props.meaning.substring(0,50)}</dd>                                                 
            </div>    
            </dl>
        </div>);
}


export default Tiles;