import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { submitNewNote } from '../actions/fetch.js';
import { Button, TextArea } from '../styles/themeComponents.js';


class Create extends React.Component {

  state = {
    title: '',
    text: '',
  }

  onChangeTitle = (title) => {
    this.setState({
      title,
    })
    localStorage.setItem('newNoteDraftTitle', title)
  }

  onChangeText = (text) => {
    this.setState({
      text,
    })
    localStorage.setItem('newNoteDraftText', text)
  }

  getDraftFromLS = () => {
    const draft = {
      title: localStorage.getItem('newNoteDraftTitle'),
      text: localStorage.getItem('newNoteDraftText'),
    }
    return draft;
  }

  clearLS = () => {
    localStorage.removeItem('newNoteDraftTitle');
    localStorage.removeItem('newNoteDraftText');
    this.setState({
      title: '',
      text: '',
    })
  }

  handleSaveButton = (title, text) => {
    if (title === '') return alert('Title should not be empty');
    submitNewNote(title, text);
    this.clearLS();
  }

  render() {
    const { title, text } = this.state;
    const draft = this.getDraftFromLS() !== null && this.getDraftFromLS();

    return (
      <div className="App-main">
        <Link to="/"><Button primary>Go back to list</Button></Link>
          <p className="note-edited">
            <TextArea
              caption
              placeholder="Nice title"
              onChange={(evt) => this.onChangeTitle(evt.target.value)}
              value={draft.title || title}
            />
            <TextArea
              defaultHeight
              placeholder="Nice story"
              onChange={(evt) => this.onChangeText(evt.target.value)}
              value={draft.text || text}
            />
          </p>
        <Button
          primary
          onClick={() => this.handleSaveButton(title, text)}>
          Save it
        </Button>
        <Button
          primary
          onClick={() => this.clearLS(title, text)}>
          Clear draft
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    allNotes: state.allNotes,
    currentNote: state.currentNote,
  }
}

export default connect(mapStateToProps)(Create);
