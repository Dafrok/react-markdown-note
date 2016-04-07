import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Avatar from 'material-ui/lib/avatar';
import Colors from 'material-ui/lib/styles/colors';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import ContentUndo from 'material-ui/lib/svg-icons/content/undo';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import {Link} from 'react-router'
import Header from './header'
import StatusBar from '../util/status-bar'
import Navigator from '../util/navigator'
import connect from '../../lib/connect.js'
import dateFormat from '../../lib/date-format.js'

export default class Recycle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }
  recover = id => {
    // connect.child('recycle').child(connect.getAuth().auth.uid).remove()
    this.getList()
  }
  getList = () => {
    connect.child('recycle').child(connect.getAuth().auth.uid).orderByChild('time').once("value", snapshot => {
      let list = []
      snapshot.forEach(snap => {
        let value = snap.val()
        value.id = snap.key()
        list.unshift(value)
      })
      this.setState({articles: list})
    }, errorObject => {
      console.log("The read failed: " + errorObject.code);
    })
  }
  componentDidMount = () => {
    this.getList()
  }
  render () {
    return (
      <div>
      <Navigator />
      <StatusBar>
        <Header />
      </StatusBar>
      <List>
        {
          this.state.articles.map((item, index) => {
            return (<ListItem
              key={item.id}
              rightIcon={
                <ContentUndo onTouchTap={this.recover}/>
              }
              primaryText={item.title}
              secondaryText={dateFormat(new Date(item.time), 'yyyy-MM-dd hh:mm:ss')}
            />)

          })
        }
      </List>
      </div>
    )
  }
}

export default Recycle;