import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './styles/index.css';
import App from './App';
import reducer from './reducers/reducer';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Note from './view/Note';
import Edit from './view/Edit';
import Create from './view/Create';
import NoteList from './view/NoteList';


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App>
      <HashRouter>
        <div>
          <header className="App-header"><a href="/">Black Note</a></header>
          <Switch>
            <Route exact path="/" component={NoteList}/>
            <Route exact path="/notes/:id" component={Note}/>
            <Route exact path="/notes/:id/edit" component={Edit}/>
            <Route exact path="/note" store={store} component={Create}/>
          </Switch>
        </div>
      </HashRouter>
    </App>
  </Provider>,
  document.getElementById('root')
);
