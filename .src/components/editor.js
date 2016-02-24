import React from 'react'
import TextField from 'material-ui/lib/text-field'
import Card from 'material-ui/lib/card/card'
import CardActions from 'material-ui/lib/card/card-actions'

export default class Editor extends React.Component {
  constructor(props) {
    super(props)
  }
  toggleNav () {
    Actions.toggleNav()
  }
  render() {
    return (
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
    );
  }
}

export default Editor;
