import React from "react";

function Note() {
    return (
        <div className="note-container">
            <div className="note-heading-container">
                <h1 className="note-heading">This is the note title</h1>
            </div>
            <div className="note-content">
                <p>This is a note.</p>
            </div>
        </div>
    )
}

export default Note;