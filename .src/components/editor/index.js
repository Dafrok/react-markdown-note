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
  componentWillUnmount = () => {
      this.setState({
          postKey: null,
          note: ''
      })
  }
  componentDidMount = () => {
      if (this.props.params.noteId !== '0') {
          connect.child('note').child(connect.getAuth().auth.uid).child(this.props.params.noteId).once('value', snapshot => {
              this.setState({
                  postKey: snapshot.key(),
                  note: snapshot.val().note
              })
          })
      }
  }
  render() {
    return (
      <div>
      <Navigator />
      <StatusBar>
        <Header note={this.state.note} postKey={this.state.postKey} setPostKey={this.setPostKey} history={this.props.history}/>
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
