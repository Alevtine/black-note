import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCurrentNote, saveEditedNote, fetchNote } from '../actions/fetch.js';
import { Button, TextArea } from '../styles/themeComponents.js';

class Edit extends React.Component {
  state = {
    title: this.props.currentNote.title,
    text: this.props.currentNote.text,
  }

  componentDidMount() {
    fetchNote(this.props.dispatch, this.props.match.params.id);
  }

  componentWillUnmount() {
    localStorage.removeItem('currentNoteDraftTitle');
    localStorage.removeItem('currentNoteDraftText');
  }

  onChangeTitle = (title) => {
    this.setState({
      title,
    })
    localStorage.setItem('currentNoteDraftTitle', title)
  }

  onChangeText = (text) => {
    this.setState({
      text,
    })
    localStorage.setItem('currentNoteDraftText', text)
  }

  getChangesFromLS = () => {
    const changes = {
      title: localStorage.getItem('currentNoteDraftTitle'),
      text: localStorage.getItem('currentNoteDraftText'),
    }
    return changes;
  }

  returnCurrentValues = () => {
    localStorage.removeItem('currentNoteDraftTitle');
    localStorage.removeItem('currentNoteDraftText');
    this.setState({
      title: this.props.currentNote.title,
      text: this.props.currentNote.text,
    })
  }


  render() {
    const { currentNote, dispatch } = this.props;
    const { title, text } = this.state;
    const changesInDraft = this.getChangesFromLS() !== null && this.getChangesFromLS();
console.log(this.state)
    return(
      <div className="App-main">
        <Link to="/"><Button primary>Go back to list</Button></Link>
        <p className="note-edited" key={currentNote.id}>
          <TextArea
            caption
            onChange={(evt) => this.onChangeTitle(evt.target.value)}
            value={changesInDraft.title || currentNote.title}
          />
          <TextArea
            defaultHeight
            onChange={(evt) => this.onChangeText(evt.target.value)}
            value={changesInDraft.text || currentNote.text}
          />
        </p>
        <Button
          primary
          onClick={() => saveEditedNote(dispatch, currentNote.id, title, text)}>
          Save changes
        </Button>
        <Button
          onClick={() => this.returnCurrentValues()}>
          Cancel changes
        </Button>
        <Button
          onClick={() => deleteCurrentNote(dispatch, currentNote.id, title, text)}>
          Delete this note
        </Button>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    currentNote: state.currentNote,
  }
}

export default connect(mapStateToProps)(Edit);
