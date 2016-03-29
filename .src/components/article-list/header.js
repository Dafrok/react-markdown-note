import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import {Actions} from '../../stores/nav.js'

export default class MainHeader extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
  }
  toggleNav () {
    Actions.toggleNav()
  }
  newNote = () => {
      this.context.router.push('/editor')
  }
  render() {
    return (
        <AppBar
          title='Markdown Note'
          onLeftIconButtonTouchTap={this.toggleNav}
          iconElementRight={<IconButton onTouchTap={this.newNote}><ContentAdd /></IconButton>}
          />
    );
  }
}
