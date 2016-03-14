import React from 'react'
import Header from './header.js'
import StatusBar from '../util/status-bar'
import Navigator from '../util/navigator'
import Paper from 'material-ui/lib/paper'
import connect from '../../lib/connect.js'

export default class Preview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        note: ''
    }
  }
  componentDidMount = () => {
      connect.child('note').child(connect.getAuth().auth.uid).child(this.props.params.noteId).once('value', snapshot => {
          console.log(snapshot.val())
          this.setState({note: snapshot.val().note})
      })
  }
  render() {
    return (
      <div>
        <Navigator />
        <StatusBar>
          <Header />
        </StatusBar>
        <Paper style={{padding: 10}}>{this.state.note}</Paper>
      </div>
    );
  }
}
