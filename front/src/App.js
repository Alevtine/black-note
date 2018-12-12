import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNoteListAction, submitNewNoteAction } from './actions/fetch';
import NoteList from './view/noteList';
import { Route } from 'react-router-dom';


function mapStateToProps(state) {
  return {
    allNotes: state.allNotes,
    currentNote: state.currentNote,
  }
}

class App extends Component {

  componentDidMount() {
    this.fetchNoteList()
  }

  fetchNoteList = () => {
    fetchNoteListAction(this.props.dispatch);
  }

  handleSubmit = () => {
    submitNewNoteAction();
  }

  render() {

    return (
        <div className="App">
          {this.props.children}
          <button type="button" onClick={() => this.handleSubmit()}>Create new note</button>
        </div>
    );
  }
}

export default connect(mapStateToProps)(App);
