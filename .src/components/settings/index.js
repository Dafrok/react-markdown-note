import React from 'react'
import Header from '../util/header'
import StatusBar from '../util/status-bar'
import Navigator from '../util/navigator'
export default class About extends React.Component {
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
      <div>Settings</div>
      </div>
    );
  }
}
