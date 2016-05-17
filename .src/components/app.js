import React from 'react'
import Theme from './util/theme'
// import MyRawTheme from '../lib/theme.js'
// import ThemeManager from 'material-ui/lib/styles/theme-manager'
// import ThemeDecorator from 'material-ui/lib/styles/theme-decorator'

// @ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Theme>
      <section className="content">
        {this.props.children}
      </section>
      </Theme>
    )
  }
}
