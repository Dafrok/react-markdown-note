import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu';
import {Actions} from '../../stores/nav.js'

export default class MainHeader extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
  }
  toggleNav (e) {
    e.stopPropagation()
    e.preventDefault()
    Actions.toggleNav()
  }
  newNote = () => {
      this.context.router.push('/editor')
  }
  render() {
    return (
        <AppBar
          title='Markdown Note'
          iconElementLeft={<IconButton onClick={this.toggleNav}><NavigationMenu /></IconButton>}
          iconElementRight={<IconButton onClick={this.newNote}><ContentAdd /></IconButton>}
          />
    );
  }
}
