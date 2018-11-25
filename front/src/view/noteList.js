import React from 'react';

const NoteList = (props) => (
  <div>
    <form onSubmit={props.handleSubmit}>
      <p>
        <strong>New Note will be sent to server:</strong>
      </p>
      <textarea
        type="text"
        onChange={props.onChange}
      />
      <br /><button type="submit">Submit new note</button>
    </form>
      <div>
        {
          props.isListShown &&
          props.allNotes.map((note, i) => <p key={i}>{note.id} {note.date} {note.title} {note.text}</p>)
        }
      </div>
      <br /><button type="button" onClick={props.showNoteList}>Show all notes list</button>
      <br /><button type="button" onClick={props.hideNoteList}>Hide all notes list</button>
    </div>
)

export default NoteList;
