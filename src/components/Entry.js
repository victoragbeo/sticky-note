import React  from "react";
import notes from '../notes';

function Entry(){
  return(

    notes.map( note => {
      return(
        <div key={note.key}>
          <h1>{note.title} </h1>
          <p>{note.contents} </p>
        </div>
     ); 
    })
   
  );
}

export default Entry;