import React from 'react'
import MainHeader from './headers/main.js'
import EditorHeader from './headers/editor.js'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section className="status-bar">
        <MainHeader />
      </section>
    );
  }
}
