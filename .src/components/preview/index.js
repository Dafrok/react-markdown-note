import '../../static/github-markdown.css'
import '../../static/highlight.css'
import React from 'react'
import Header from './header.js'
import StatusBar from '../util/status-bar'
import Navigator from '../util/navigator'
import Paper from 'material-ui/lib/paper'
import marked from 'marked'
import connect from '../../lib/connect.js'

export default class Preview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        id: 0,
        note: ''
    }
  }
  componentDidMount = () => {
      connect.child('note').child(connect.getAuth().auth.uid).child(this.props.params.noteId).once('value', snapshot => {
          this.setState({
              id: snapshot.key(),
              note: snapshot.val().note
          })
      })
  }
  render() {
    return (
      <div>
        <Navigator />
        <StatusBar>
          <Header id={this.state.id}/>
        </StatusBar>
        <Paper className="markdown-body" style={{padding: 20}} dangerouslySetInnerHTML={{__html: marked(this.state.note)}}></Paper>
      </div>
    );
  }
}
