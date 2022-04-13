import React from "react";
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from './notes';


function App(){
    return (<div>
        <Header />
        {notes.map((lnote) => (
            <Note 
                key={lnote.key}
                title={lnote.title}
                content={lnote.content}
            />
        ))}
        <Footer />     
    </div>);
}

export default App;