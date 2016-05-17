import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Colors from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentUndo from 'material-ui/svg-icons/content/undo';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
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
    connect.child('recycle').child(connect.getAuth().auth.uid).child(id).once('value', snapshot => {
        connect.child('note').child(connect.getAuth().auth.uid).push(snapshot.val())
        connect.child('recycle').child(connect.getAuth().auth.uid).child(id).remove()
    })
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
        <Header refresh={this.getList} />
      </StatusBar>
      <List>
        {
          this.state.articles.map((item, index) => {
            return (<ListItem
              key={item.id}
              rightIconButton={
                <IconButton
                  onClick={e =>{
                    e.preventDefault()
                    e.stopPropagation()
                    this.recover(item.id)
                  }}>
                  <ContentUndo />
                </IconButton>
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
