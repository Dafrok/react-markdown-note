import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import ActionDelete from 'material-ui/lib/svg-icons/action/delete';
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
  deleteAll = () => {
      connect.child('recycle').child(connect.getAuth().auth.uid).remove()
  }
  render() {
    return (
        <AppBar
          title='Markdown Note'
          onLeftIconButtonTouchTap={this.toggleNav}
          iconElementRight={<IconButton onTouchTap={this.newNote}><ActionDelete onTouchTap={this.deleteAll}/></IconButton>}
          />
    );
  }
}
