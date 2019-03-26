import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { submitNewNote } from '../actions/fetch.js';
import { Button, TextArea } from '../styles/themeComponents.js';

const Create = (props) => {

  let textareaTitle = '';
  let textareaText = '';

  return (
    <div className="App-main">
      <Link to="/"><Button primary>Go back to list</Button></Link>
        <p className="note-edited">
          <TextArea caption placeholder="Nice title" ref={(node) => { textareaTitle = node }} />
          <TextArea defaultHeight placeholder="Nice story" ref={(node) => { textareaText = node }} />
        </p>
      <Button
        primary
        onClick={() => submitNewNote(textareaTitle.value, textareaText.value)}>
        Save it
      </Button>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => {
  return {
    allNotes: state.allNotes,
  }
}

export default connect(mapStateToProps)(Create);
