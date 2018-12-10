import React from 'react';
import { Link } from 'react-router-dom';

const NoteList = (props) => {
  const { fetchedNotes } = props;
  return (
    <ul>
      {fetchedNotes.map((note, index) => <li key={index}><Link to={`/notes/${note.id}`}>{note.title}</Link></li>)}
    </ul>
  )
}

export default NoteList;
