import './stylus/main.styl'

import React from 'react'
import ReactDOM from 'react-dom'
import StatusBar from './components/status-bar.js'
import Nav from './components/nav.js'
import ArticleList from './components/article-list.js'
import Editor from './components/editor.js'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

ReactDOM.render(
  <app>
    <StatusBar/>
    <Nav />
    <section className="content">
      <Editor />
      <ArticleList />
    </section>
  </app>,
  document.getElementById('app'))
