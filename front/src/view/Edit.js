import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCurrentNote, saveEditedNote } from '../actions/fetch.js';
import { Button, TextArea } from '../styles/themeComponents.js';

const Edit = (props) => {
  const { currentNote = {}, dispatch } = props;

  let textareaTitle = '';
  let textareaText = '';

  const returnCurrentValues = () => {
    textareaTitle.value = currentNote.title;
    textareaText.value = currentNote.text;
  }

    return (
      <div className="App-main">
        <Link to="/"><Button primary>Go back to list</Button></Link>
        <p className="note-edited" key={currentNote.id}>
          <TextArea
            caption
            defaultValue={currentNote.title}
            ref={(node) => { textareaTitle = node }} />
          <TextArea
            defaultHeight
            defaultValue={currentNote.text}
            ref={(node) => { textareaText = node }}
          />
        </p>
        <Button
          primary
          onClick={() => saveEditedNote(dispatch, currentNote.id, textareaTitle.value, textareaText.value)}>
          Save changes
        </Button>
        <Button
          onClick={() => returnCurrentValues()}>
          Cancel changes
        </Button>
        <Button
          onClick={() => deleteCurrentNote(dispatch, currentNote.id, textareaTitle.value, textareaText.value)}>
          Delete this note
        </Button>
      </div>
    )
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentNote: state.allNotes.find(note => note.id === Number(ownProps.match.params.id)),
    allNotes: state.allNotes,
  }
}

export default connect(mapStateToProps)(Edit);
