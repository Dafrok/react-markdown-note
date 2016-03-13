import React from 'react'
import TextField from 'material-ui/lib/text-field'
import Card from 'material-ui/lib/card/card'
import CardActions from 'material-ui/lib/card/card-actions'
import StatusBar from '../util/status-bar'
import Header from './header.js'
import Navigator from '../util/navigator'
import connect from '../../lib/connect.js'

export default class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postKey: null,
      note: ''
    }
  }
  changeNote = e => {
    this.setState({note: e.target.value})
  }
  setPostKey = key => {
    this.setState({postKey: key})
  }
  toggleNav () {
    Actions.toggleNav()
  }
  render() {
    return (
      <div>
      <Navigator />
      <StatusBar>
        <Header note={this.state.note} postKey={this.state.postKey} setPostKey={this.setPostKey}/>
      </StatusBar>
      <Card>
        <CardActions>
          <TextField
              hintText="Notepad"
              multiLine={true}
              fullWidth={true}
              underlineShow={false}
              onChange={this.changeNote}
              value={this.state.note}
            />
        </CardActions>
      </Card>
      </div>
    );
  }
}

export default Editor;
