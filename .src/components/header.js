import React from 'react'
import AppBar from 'material-ui/lib/app-bar';

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <AppBar
          title='Markdown Note'
          />
    );
  }
}
