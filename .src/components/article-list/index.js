import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Avatar from 'material-ui/lib/avatar';
import Colors from 'material-ui/lib/styles/colors';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import {Link} from 'react-router'
import Header from './header.js'
import StatusBar from '../util/status-bar'
import Navigator from '../util/navigator'
import connect from '../../lib/connect.js'

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={Colors.grey400} />
  </IconButton>
)

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Edit</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
)

export default class ArticleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: {}
    }
  }
  componentDidMount = () => {
    connect.child('note').child(connect.getAuth().auth.uid).orderByChild('time').once("value", snapshot => {
      console.log(snapshot.val())
      this.setState({articles:  snapshot.val()})
    }, errorObject => {
      console.log("The read failed: " + errorObject.code);
    });
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
          Object.keys(this.state.articles).map(key => {
            return (<ListItem
              rightIconButton={rightIconMenu}
              primaryText={this.state.articles[key].summary}
              secondaryText={this.state.articles[key].time}
              linkButton={true} containerElement={<Link to="/preview" />}
            />)
          })
        }
      </List>
      </div>
    )
  }
}

export default ArticleList;
