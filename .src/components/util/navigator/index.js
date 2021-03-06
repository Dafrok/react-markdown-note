import React from 'react'
import Reflux from 'reflux'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import NavStore from '../../../stores/nav.js'
import {Actions} from '../../../stores/nav.js'
import {Link} from 'react-router'
import connect from '../../../lib/connect.js'
import Delete from 'material-ui/svg-icons/action/delete';
import Build from 'material-ui/svg-icons/action/build';
import Insert from 'material-ui/svg-icons/editor/insert-drive-file';
import Folder from 'material-ui/svg-icons/file/folder';
import Favor from 'material-ui/svg-icons/action/grade';
import Auth from 'material-ui/svg-icons/action/supervisor-account';

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    Reflux.listenTo(NavStore)
  }
  logout = e => {
    connect.unauth()
  }
  close () {
    Actions.toggleNav(true)
  }
  onStatusChange = data => {
    this.setState({open: data})
  }
  componentDidMount () {
    this.unsubscribe = NavStore.listen(this.onStatusChange)
  }
  componentWillUnmount () {
    this.unsubscribe()
  }
  render() {
    return (
      <Drawer className="navigator"
        docked={false}
        width={200}
        open={this.state.open}
        onRequestChange={open => Actions.toggleNav(open)}>
        <MenuItem leftIcon={<Insert />} linkButton={true} containerElement={<Link to="/editor" />}>New Note</MenuItem>
        <MenuItem leftIcon={<Folder />} linkButton={true} containerElement={<Link to="/article-list" />}>My Notes</MenuItem>
        <MenuItem leftIcon={<Delete />} linkButton={true} containerElement={<Link to="/recycle" />}>Recycle</MenuItem>
        <MenuItem leftIcon={<Build />} linkButton={true} containerElement={<Link to="/settings" />}>Settings</MenuItem>
        {/*<MenuItem leftIcon={<Favor />} linkButton={true} containerElement={<Link to="/about" />}>About</MenuItem>*/}
        <MenuItem leftIcon={<Auth />} linkButton={true} containerElement={<Link to="/login" onClick={this.logout} />}>{connect.getAuth() ? 'Logout' : 'Login'}</MenuItem>
      </Drawer>
    );
  }
}
