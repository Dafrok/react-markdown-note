import React from 'react'
import TextField from 'material-ui/TextField'
import {Card, CardActions} from 'material-ui/Card'
import StatusBar from '../util/status-bar'
import Header from './header.js'
import Navigator from '../util/navigator'
import connect from '../../lib/connect.js'

export default class Editor extends React.Component {
  constructor(props, context) {
    super(props, context)
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
  componentWillReceiveProps = nextProps => {
    const id = nextProps.params.noteId
    if (id) {
        connect.child('note').child(connect.getAuth().auth.uid).child(id).once('value', snapshot => {
            this.setState({
                postKey: snapshot.key(),
                note: snapshot.val().note
            })
        })
    } else {
      this.setState({
        note: '',
        postKey: null
      })
    }
  }
  componentDidMount = () => {
      if (this.props.params.noteId) {
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
        <Header note={this.state.note} postKey={this.state.postKey} setPostKey={this.setPostKey} router={this.context.router}/>
      </StatusBar>
      <Card>
        <CardActions>
          <TextField
              hintText="&nbsp;Enter markdown text here."
              fullWidth={true}
              underlineShow={false}
              multiLine={true}
              onChange={this.changeNote}
              value={this.state.note}
            />
        </CardActions>
      </Card>
      </div>
    );
  }
}

Editor.contextTypes = {
    router: React.PropTypes.object
}

export default Editor
