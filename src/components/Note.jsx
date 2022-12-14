import React from "react";

//2. Implement the delete note functionality.

function Note(props) {
  function handleClick() {}

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
