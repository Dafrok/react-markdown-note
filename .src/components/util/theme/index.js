import React from 'react'
import Reflux from 'reflux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ThemeStore from '../../../stores/theme.js'

class Theme extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      theme: ThemeStore.theme
    }
    Reflux.listenTo(ThemeStore)
  }
  onStatusChange = theme => {
    this.setState({theme: theme})
  }
  componentDidMount () {
    this.unsubscribe = ThemeStore.listen(this.onStatusChange)
  }
  componentWillUnmount () {
    this.unsubscribe()
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={this.state.theme}>
          {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default Theme
