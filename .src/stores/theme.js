import Reflux from 'reflux'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import defaultTheme from '../components/util/theme/theme.js'
import merge from 'deepmerge'

const Actions = Reflux.createActions([
  'changeTheme',
])

let Store = Reflux.createStore({
  listenables: [Actions],
  theme: getMuiTheme(JSON.parse(localStorage.getItem('theme')) || defaultTheme),
  onChangeTheme (newTheme) {

    if (newTheme) {
      const themeObj = merge(JSON.parse(localStorage.getItem('theme')) || defaultTheme, newTheme || {})
      this.theme = getMuiTheme(themeObj)
      localStorage.setItem('theme', JSON.stringify(themeObj))
    } else {
      this.theme = getMuiTheme(defaultTheme)
      localStorage.setItem('theme', JSON.stringify(defaultTheme))
    }

    this.trigger(this.theme)
  }
})

export {Actions}
export default Store
