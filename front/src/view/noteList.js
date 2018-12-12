import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const NoteList = (props) => {
  const { allNotes } = props;
  return (
    <ul>
      {allNotes.map((note, index) => <li key={index}><Link to={`/notes/${note.id}`}>{note.title}</Link></li>)}
    </ul>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    allNotes: state.allNotes
  }
}

export default connect(mapStateToProps)(NoteList);
