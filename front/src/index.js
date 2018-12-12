import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import reducer from './reducers/reducer';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Note from './view/Note';
import Edit from './view/Edit';
import NoteList from './view/noteList';


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App>
        <header className="App-header">Black Note</header>
        <Switch>
          <Route exact path="/" component={NoteList}/>
          <Route exact path="/notes/:id" component={Note}/>
          <Route path="/notes/:id/edit" component={Edit}/>
        </Switch>
      </App>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
