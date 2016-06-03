import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import Search from './search.js'
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
    Actions.toggleNav(true)
  }
  newNote = () => {
      this.context.router.push('/editor')
  }
  render() {
    return (
        <AppBar
          title={<Search filter={this.props.filter}/>}
          iconElementLeft={<IconButton onClick={this.toggleNav}><NavigationMenu /></IconButton>}
          iconElementRight={<IconButton onClick={this.newNote}><ContentAdd /></IconButton>}
          />
    );
  }
}
