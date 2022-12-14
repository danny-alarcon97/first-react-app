import React, { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  //1b. - Pass the new note back to the App.
  const [notes, setNotes] = useState([]);

  //1c. - Add new note to an array
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  //2a. - Callback from the Note component to trigger a delete function.
  //2b. - Use the filter function to filter out the item that needs deletion.
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  //1d. - Take array and render separate Note components for each item.
  //2c. - Pass a id over to the Note component, pass it back to the App when deleting.
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
