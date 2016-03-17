import React from 'react'
import MyRawTheme from '../lib/theme.js'
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator'

@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section className="content">
        {this.props.children}
      </section>
    )
  }
}
