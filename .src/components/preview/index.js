import React from 'react'
import Header from './header.js'
import StatusBar from '../util/status-bar'
import Navigator from '../util/navigator'
export default class Preview extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Navigator />
        <StatusBar>
          <Header />
        </StatusBar>
        <div>Preview</div>
      </div>
    );
  }
}
