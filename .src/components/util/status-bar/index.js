import React from 'react'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section className="status-bar">
        {this.props.children}
      </section>
    );
  }
}
