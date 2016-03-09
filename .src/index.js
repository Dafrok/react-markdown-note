import './stylus/main.styl'

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, RouteHandle, hashHistory, IndexRoute} from 'react-router'
import App from './components/app.js'
import ArticleList from './components/article-list'
import About from './components/about'
import Preview from './components/preview'
import Editor from './components/editor'
import Login from './components/login'
import Recycle from './components/recycle'
import injectTapEventPlugin from 'react-tap-event-plugin'
import connect from './lib/connect.js'
var FastClick = require('fastclick');
FastClick.attach(document.body);
injectTapEventPlugin();

const needLogin = (nextState, replace) => {
  if (!connect.getAuth()) {
    replace('/login')
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login}/>
      <Route path="editor" component={Editor} onEnter={needLogin}/>
      <Route path="editor/:noteId" component={Editor} onEnter={needLogin}/>
      <Route path="article-list" component={ArticleList} onEnter={needLogin}/>
      <Route path="preview/:noteId" component={Preview} onEnter={needLogin}/>
      <Route path="recycle" component={Recycle} onEnter={needLogin}/>
      <Route path="about" component={About} onEnter={needLogin}/>
      <Route path="login" component={Login}/>
    </Route>
  </Router>,
  document.getElementById('app'))
