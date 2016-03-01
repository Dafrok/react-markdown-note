import React from 'react'
import StatusBar from './util/status-bar'
import MainHeader from './util/header'
import Navigator from './util/navigator'
export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section>
        <Navigator />
        <section className="content">
          {this.props.children}
        </section>
      </section>
    )
  }
}
