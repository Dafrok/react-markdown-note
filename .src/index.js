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
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ArticleList}/>
      <Route path="editor" component={Editor}/>
      <Route path="article-list" component={ArticleList} />
      <Route path="preview" component={Preview}/>
      <Route path="about" component={About}/>
      <Route path="login" component={Login}/>
    </Route>
  </Router>,
  document.getElementById('app'))
