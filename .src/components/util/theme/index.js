import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MyRawTheme from './theme.js'

const defaultTheme = getMuiTheme(MyRawTheme)
// const defaultTheme = getMuiTheme({
//   palette: {
//     textColor: cyan500,
//   },
//   appBar: {
//     height: 50,
//   },
// })
class Theme extends React.Component {
  constructor (props) {
    super(props)
    this.state = defaultTheme
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={this.state}>
          {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default Theme
