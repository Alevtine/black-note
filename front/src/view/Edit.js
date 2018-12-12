import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {saveEditedNote} from '../actions/save.js';

class Edit extends React.Component {

  render() {
    const { currentNote = {}, dispatch } = this.props;

  return (
    <div>
      <p key={currentNote.id}>
      <textarea defaultValue={currentNote.title}></textarea>
      <textarea defaultValue={currentNote.text}></textarea>
      </p>
      <button type="button" onClick={() => saveEditedNote(dispatch, currentNote.id, 1, 2)}>Save it</button>
      <button type="button">Cancel changes</button>
    </div>
  )
}
}

const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps)
  return {
    currentNote: state.allNotes.find(note => note.id === Number(ownProps.match.params.id))
  }
}

export default connect(mapStateToProps)(Edit);
