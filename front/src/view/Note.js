import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Note = ({ currentNote }) => {
  return (
    <div>
      <div>Date: {currentNote.date}</div>
      <div>Title: {currentNote.title}</div>
      <div>Text: {currentNote.text}</div>
      <br />
      <Link to={`/notes/${currentNote.id}/edit`}>Edit this note</Link>
      <br />
      <Link to="/">Go back to list</Link>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentNote: state.allNotes.find(note => note.id === Number(ownProps.match.params.id))
  }
}

export default connect(mapStateToProps)(Note);
