import './stylus/main.styl'

import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header.js'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

ReactDOM.render(
  <app>
    <Header />
  </app>,
  document.getElementById('app'))
