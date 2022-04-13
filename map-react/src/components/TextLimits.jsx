
import Emojipedia from "./emojipedia";

function TextLimits(){
    
    return Emojipedia[0].meaning.slice(0,100);    
    
}

export default TextLimits;