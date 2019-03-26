import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNoteList } from '../actions/fetch';
import { Button } from '../styles/themeComponents.js';

class NoteList extends React.Component {

  componentDidMount() {
    fetchNoteList(this.props.dispatch);
  }

  render() {
    const { allNotes } = this.props;

    return (
      <div className="App-main">
        <Link to="/note"><Button>Create new note</Button></Link>
        <ul>
          {allNotes.map((note, index) => <li key={index}><Link to={`/notes/${note.id}`}>{note.title}</Link></li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    allNotes: state.allNotes,
  }
}

export default connect(mapStateToProps)(NoteList);
