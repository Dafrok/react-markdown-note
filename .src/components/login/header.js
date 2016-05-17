import React from 'react'
<<<<<<< HEAD
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import ActionLock from 'material-ui/lib/svg-icons/action/lock'
=======
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import ActionLock from 'material-ui/svg-icons/action/lock'
>>>>>>> master
import {Link} from 'react-router'
import {Actions} from '../../stores/nav.js'

export default class EditorHeader extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <AppBar
          title='Login'
          iconElementRight={<IconButton onClick={() => {this.context.router.push('/forgot')}}><ActionLock/></IconButton>}
          />
    );
  }
}
