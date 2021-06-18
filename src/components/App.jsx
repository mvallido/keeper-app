import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App(){
    return(
        <d1v>
            <Header />
            {notes.map(noteCard => (
                <Note 
                    key={noteCard.key}
                    title={noteCard.title}
                    content={noteCard.content}
                />
            ))}
            <Footer />
        </d1v>
    )
}

export default App;
