import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from '../notes';
// import Entry from './Entry';

console.log(notes);

function createCard(note){
        return(
            <Note key={note.key}
            title={note.title}
            content={note.content}/>
        )
}


function App() {
  return (
    <div>
      <Header />
      {notes.map(createCard)}
      <Footer />
    </div>
  );
}

export default App;
