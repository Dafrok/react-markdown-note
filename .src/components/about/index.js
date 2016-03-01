import React from 'react'
import Header from '../util/header'
import StatusBar from '../util/status-bar'
export default class About extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
      <StatusBar>
        <Header />
      </StatusBar>
      <div>About</div>
      </div>
    );
  }
}
