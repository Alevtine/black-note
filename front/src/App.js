import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNoteListAction, submitNewNoteAction, showListAction, hideListAction, onChangeTextAction } from './actions/fetch';
import Menu from './view/Menu';
import NoteList from './view/noteList';

function mapStateToProps(state) {
  return {
    allNotes: state.allNotes,
    typed: state.typed,
    isListShown: state.isListShown,
  }
}

class App extends Component {

  componentDidMount() {
    this.fetchNoteList()
  }

  fetchNoteList = () => {
    fetchNoteListAction(this.props.dispatch);
  }

  showNoteList = () => {
    showListAction(this.props.dispatch)
  }

  hideNoteList = () => {
    hideListAction(this.props.dispatch)
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.fetchNoteList()
    const textarea = document.querySelector('textarea');
    textarea.value = '';
    submitNewNoteAction(this.props.typed);
  }

  onChange = (evt) => {
    onChangeTextAction(this.props.dispatch, evt.target.value);
  }

  render() {

    return (
        <div className="App">
          <header className="App-header">Black Note</header>
            <Menu />
            {/* <NoteList
              allNotes={this.props.allNotes}
              isListShown={this.props.isListShown}
              typed={this.props.typed}
              handleSubmit={this.handleSubmit}
              showNoteList={this.showNoteList}
              hideNoteList={this.hideNoteList}
              onChange={this.onChange}
            /> */}
        </div>
    );
  }
}

export default connect(mapStateToProps)(App);
