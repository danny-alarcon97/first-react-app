import React from "react";

function Note(props) {
  return (
    <div className="note">
      <span>
        <h1>{props.title}</h1>
      </span>
      <span>
        <p>{props.content}</p>
      </span>
    </div>
  );
}

export default Note;
