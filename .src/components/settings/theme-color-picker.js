import '../../stylus/colorpickr.styl'
import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import ColorPickr from 'react-colorpickr'
import ThemeStore, {Actions as ThemeActions} from '../../stores/theme.js'

export default class Color extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      [this.props.option.key]: ThemeStore.theme.palette[this.props.option.key]
    }
  }
  onChange = (color) => {
    this.setState({[this.props.option.key]: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`})
  }
  handleChangeColor = () => {
    ThemeActions.changeTheme({
      palette: this.state
    })
    this.props.handleClose()
  }
  render() {
    return (
      <Dialog
        open={this.props.open}
        autoScrollBodyContent={true}
        onRequestClose={this.props.handleClose}
        onClick={e => {e.stopPropagation()}}
        bodyStyle={{textAlign: 'center', paddingLeft: 0, paddingRight: 0, overflowX: 'hidden'}}
        actions={[
          <FlatButton
           label="Cancel"
           onTouchTap={this.props.handleClose}
           />,
         <FlatButton
           label="OK"
           primary={true}
           keyboardFocused={true}
           onTouchTap={this.handleChangeColor}
           />
        ]}>
        <ColorPickr onChange={this.onChange} value={this.state[this.props.option.key]}/>
      </Dialog>
    );
  }
}
