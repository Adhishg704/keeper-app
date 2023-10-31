import React from "react";

function Note(props) {
    return (
        <div className="note-container">
            <div className="note-heading-container">
                <h1 className="note-heading">{props.title}</h1>
            </div>
            <div className="note-content">
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Note;