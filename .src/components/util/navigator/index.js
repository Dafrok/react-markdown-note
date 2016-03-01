import React from 'react'
import Reflux from 'reflux'
import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menus/menu-item'
import NavStore from '../../../stores/nav.js'
import {Actions} from '../../../stores/nav.js'
import {Link} from 'react-router'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    Reflux.listenTo(NavStore)
  }
  close () {
    Actions.toggleNav(false)
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
      <LeftNav className="navigator"
        docked={false}
        width={200}
        open={this.state.open}
        onRequestChange={open => Actions.toggleNav(open)}>
        <MenuItem onTouchTap={this.close} linkButton={true} containerElement={<Link to="/editor" />}>New Note</MenuItem>
        <MenuItem onTouchTap={this.close} linkButton={true} containerElement={<Link to="/article-list" />}>My Notes</MenuItem>
        <MenuItem onTouchTap={this.close} linkButton={true} containerElement={<Link to="/about" />}>About</MenuItem>
        <MenuItem onTouchTap={this.close} linkButton={true} containerElement={<Link to="/logout" />}>Logout</MenuItem>
      </LeftNav>
    );
  }
}
