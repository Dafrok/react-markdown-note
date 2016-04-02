import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import ActionDelete from 'material-ui/lib/svg-icons/action/delete';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import connect from '../../lib/connect.js'
import {Actions} from '../../stores/nav.js'

export default class MainHeader extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  openConfirm = () => {
    this.setState({open: true})
  }
  closeConfirm = () => {
    this.setState({open: false})
  }
  toggleNav () {
    Actions.toggleNav()
  }
  deleteAll = () => {
      connect.child('recycle').child(connect.getAuth().auth.uid).remove()
      this.closeConfirm()
  }
  render() {
    return (
        <AppBar
          title='Markdown Note'
          onLeftIconButtonTouchTap={this.toggleNav}
          iconElementRight={<IconButton onTouchTap={this.openConfirm}><ActionDelete /></IconButton>}
          children={
            <Dialog
              title="Confirm to delete"
              actions={[
                <FlatButton
                  label="YES"
                  secondary={true}
                  onTouchTap={this.deleteAll}
                />,
                <FlatButton
                  label="NO"
                  primary={true}
                  keyboardFocused={true}
                  onTouchTap={this.closeConfirm}
                />
              ]}
              modal={false}
              open={this.state.open}
              onRequestClose={this.closeConfirm}>
              Are you sure that you want to permanently delete all these notes ?
            </Dialog>
          }
          />
    );
  }
}
