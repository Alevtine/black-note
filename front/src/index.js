import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import reducer from './reducers/reducer';
import { HashRouter, Route } from 'react-router-dom';
import Note from './view/Note';
import Edit from './view/Edit';


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <header className="App-header">Black Note</header>
        <Route exact path="/" component={App}/>
        <Route exact path="/notes/:id" component={Note}/>
        <Route path="/notes/:id/edit" component={Edit}/>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
