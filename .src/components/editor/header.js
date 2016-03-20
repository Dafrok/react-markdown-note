import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import ContentSave from 'material-ui/lib/svg-icons/content/save';
import {Link} from 'react-router'
import {Actions} from '../../stores/nav.js'
import connect from '../../lib/connect.js'
import Wilddog from 'wilddog'

export default class EditorHeader extends React.Component {
  constructor(props) {
    super(props)
  }
  save = () => {
    if (this.props.postKey) {
      connect.child('note').child(connect.getAuth().auth.uid).child(this.props.postKey).set({
        note: this.props.note,
        summary: this.props.note.substr(0, 10),
        time: Wilddog.ServerValue.TIMESTAMP
      })
    } else {
      const postKey = connect.child('note').child(connect.getAuth().auth.uid).push({
        note: this.props.note,
        summary: this.props.note.substr(0, 10),
        time: Wilddog.ServerValue.TIMESTAMP
      }).key()
    //   this.props.setPostKey(postKey)
      console.log(this.props)
      this.props.history.pushState(null, `/editor/${postKey}`)
    }
  }
  toggleNav () {
    Actions.toggleNav()
  }
  render() {
    return (
        <AppBar
          title='Editor'
          onLeftIconButtonTouchTap={this.toggleNav}
          iconElementRight={<IconButton onTouchTap={this.save}><ContentSave /></IconButton>}
          />
    );
  }
}
