import React from 'react';
import {Add, Sub, Div, Mul} from './Calculator';
import Heading from './Heading';



    function App(){
        return <div>
            <Heading/>
            <ul>
                <li>{Add(2,3)}</li>
                <li>{Sub(2,3)}</li>
                <li>{Div(2,3)}</li>
                <li>{Mul(2,3)}</li>
            </ul>
        </div>;
    }
    
    export default App;