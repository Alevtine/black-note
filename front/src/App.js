import React, { Component } from 'react';

class App extends Component {
    state = {
      allNotes: '',
      typed: '',
      isListShown: false,
    };

  getNoteList = () => {
    this.fetchNoteList()
      .then(res => this.setState({ allNotes: res.map((note, i) => <p key={i}>{note.id}<br />{note.date}<br />{note.title}</p>)}))
      .catch(err => console.log(err));
      this.setState({
        isListShown: true,
      })
  }

  hideNoteList = () => {
    this.setState({
      allNotes: '',
      isListShown: false,
    })
  }

  fetchNoteList = async () => {
    const response = await fetch('/api/note/list');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    if (this.state.typed) {
      await fetch('/api/note', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ typed: this.state.typed }),
      });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">Black Note</header>
        <div>{this.state.allNotes}</div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>New Note will be sent to server:</strong>
          </p>
          <textarea
            type="text"
            onChange={evt => this.setState({ typed: evt.target.value })}
          />
          <br /><button type="submit">Submit new note</button>
          <br /><button type="button" onClick={this.getNoteList}>Show all notes list</button>
          <br /><button type="button" onClick={this.hideNoteList}>Hide all notes list</button>
        </form>
      </div>
    );
  }
}

export default App;
