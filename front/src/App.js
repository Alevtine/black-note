import React from 'react';
import { connect } from 'react-redux';


function mapStateToProps(state) {
  return {
    allNotes: state.allNotes,
    currentNote: state.currentNote,
  }
}

const App = (props) => {
  return (
      <div className="App">
        {props.children}
      </div>
  );
}

export default connect(mapStateToProps)(App);
