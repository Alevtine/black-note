import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNote } from '../actions/fetch';
import { Button } from '../styles/themeComponents.js';

const Note = ({ currentNote = {} }) => {
  const unixTimeStamp = new Date(currentNote.date);
  const timestamp = `${unixTimeStamp.toString().substr(0,10)} ${unixTimeStamp.getHours()}:${unixTimeStamp.getMinutes()} ${unixTimeStamp.getFullYear()}`;
  return (
    <div className="App-main">
      <Link to="/"><Button primary>Go back to list</Button></Link>
      <div className="note-block">
        <div className="note-title">{currentNote.title}</div>
        <div className="note-text">{currentNote.text}</div>
        <div className="note-timestamp">{timestamp}</div>
      </div>
      <Link to={`/notes/${currentNote.id}/edit`}><Button>Edit this note</Button></Link>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentNote: state.allNotes.find(note => note.id === Number(ownProps.match.params.id)),
    allNotes: state.allNotes,
  }
}

export default connect(mapStateToProps)(Note);
