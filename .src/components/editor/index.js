import React from 'react'
import TextField from 'material-ui/lib/text-field'
import Card from 'material-ui/lib/card/card'
import CardActions from 'material-ui/lib/card/card-actions'
import StatusBar from '../util/status-bar'
import Header from './header.js'
import Navigator from '../util/navigator'

export default class Editor extends React.Component {
  constructor(props) {
    super(props)
  }
  toggleNav () {
    Actions.toggleNav()
  }
  render() {
    return (
      <div>
      <Navigator />
      <StatusBar>
        <Header />
      </StatusBar>
      <Card>
        <CardActions>
          <TextField
              hintText="Notepad"
              multiLine={true}
              fullWidth={true}
              underlineShow={false}
            />
        </CardActions>
      </Card>
      </div>
    );
  }
}

export default Editor;
