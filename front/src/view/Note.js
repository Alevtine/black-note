import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNote } from '../actions/fetch';
import { Button } from '../styles/themeComponents.js';

const formatTime = function(timeInUnixFormat) {
  const date = timeInUnixFormat.toString().substr(0,10);
  const hh = ('0' + timeInUnixFormat.getHours()).slice(-2);
  const mm = ('0' + timeInUnixFormat.getMinutes()).slice(-2);
  const ss = ('0' + timeInUnixFormat.getSeconds()).slice(-2);
  const timeFormatted = `${date} at ${hh}:${mm}:${ss}`;
  return timeFormatted;
}

class Note extends React.Component {

  componentDidMount() {
    fetchNote(this.props.dispatch, this.props.match.params.id);
  }

  render() {
    const { currentNote } = this.props;
    const unixTimeCreatedAt = new Date(currentNote.dateCreated);
    const unixTimeUpdatedAt = currentNote.dateUpdated !== null && new Date(currentNote.dateUpdated);
    const timeStampCreated = formatTime(unixTimeCreatedAt);
    const timeStampUpdated = unixTimeUpdatedAt && formatTime(unixTimeUpdatedAt);

    return (
      <div className="App-main">
        <Link to="/"><Button primary>Go back to list</Button></Link>
        <div className="note-block">
          <div className="note-title">{currentNote.title}</div>
          <div className="note-text">{currentNote.text}</div>
          <div className="note-timestamp">created: {timeStampCreated}</div>
          {
            timeStampUpdated && <div className="note-timestamp">updated: {timeStampUpdated}</div>
          }
        </div>
        <Link to={`/notes/${currentNote.id}/edit`}><Button>Edit this note</Button></Link>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentNote: state.currentNote,
  }
}

export default connect(mapStateToProps)(Note);
