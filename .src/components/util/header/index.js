import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'
import {Actions} from '../../../stores/nav.js'
import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu'

export default class MainHeader extends React.Component {
  constructor(props) {
    super(props)
  }
  toggleNav (e) {
    e.stopPropagation()
    e.preventDefault()
    Actions.toggleNav(true)
  }
  render() {
    return (
        <AppBar
          title='Markdown Note'
          iconElementLeft={<IconButton onClick={this.toggleNav}><NavigationMenu /></IconButton>}
          />
    );
  }
}
