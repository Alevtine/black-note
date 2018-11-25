import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import reducer from './reducers/reducer';
import { HashRouter, Route } from 'react-router-dom';
import cities from './view/cities';
import NoteList from './view/noteList';
import piter from './view/piter';
import moscow from './view/moscow';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route path="/" component={App}/>
        <Route path="/cities" component={cities}/>
        <Route path="/city/0" component={piter}/>
        <Route path="/city/1" component={moscow}/>
        <Route path="/notes" component={NoteList}/>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
