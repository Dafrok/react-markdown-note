import React from 'react'
import Header from './header.js'
import StatusBar from '../util/status-bar'
export default class Preview extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
      <StatusBar>
        <Header />
      </StatusBar>
      <div>Preview</div>
      </div>
    );
  }
}
