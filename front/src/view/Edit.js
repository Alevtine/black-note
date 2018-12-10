import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Edit = ({ currentNote }) => {
  return (
    <div>
      <p>
      <textarea defaultValue={currentNote.title}></textarea>
      <textarea defaultValue={currentNote.text}></textarea>
      </p>
      <button type="button">Save it</button>
      <button type="button">Cancel changes</button>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps)
  return {
    currentNote: state.allNotes.find(note => note.id === Number(ownProps.match.params.id))
  }
}

export default connect(mapStateToProps)(Edit);
