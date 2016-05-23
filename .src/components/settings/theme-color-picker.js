import '../../stylus/colorpickr.styl'
import React from 'react'
import getRGBColor from '../../lib/getRGBColor.js'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import Slider from 'material-ui/Slider'
import Paper from 'material-ui/Paper'
import ColorPickr from 'react-colorpickr'
import ThemeStore, {Actions as ThemeActions} from '../../stores/theme.js'
export default class Color extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
    const defaultColor = getRGBColor(ThemeStore.theme.palette[this.props.option.key])
    this.state = {
      r: defaultColor.r,
      g: defaultColor.g,
      b: defaultColor.b,
      a: defaultColor.a
    }
  }
  onChange = (color, type) => {
    this.setState({[type]: color})
    // this.setState({[this.props.option.key]: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`})
  }
  handleChangeColor = () => {
    ThemeActions.changeTheme({
      palette: {
        [this.props.option.key]: `rgba(${this.state.r}, ${this.state.g}, ${this.state.b}, ${this.state.a})`
      }
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
        // bodyStyle={{textAlign: 'center', paddingLeft: 0, paddingRight: 0, overflowX: 'hidden'}}
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
        <Slider description={`Red: ${this.state.r}`} min={0} max={255} step={1} value={this.state.r} onChange={(e, val) => {this.onChange(val, 'r')}}/>
        <Slider description={`Green: ${this.state.g}`} min={0} max={255} step={1} value={this.state.g} onChange={(e, val) => {this.onChange(val, 'g')}}/>
        <Slider description={`Blue: ${this.state.b}`} min={0} max={255} step={1} value={this.state.b} onChange={(e, val) => {this.onChange(val, 'b')}}/>
        <Slider description={`Alpha: ${this.state.a}`} min={0} max={1} value={this.state.a} onChange={(e, val) => {this.onChange(val, 'a')}}/>
        <Paper style={{background: `rgba(${this.state.r}, ${this.state.g}, ${this.state.b}, ${this.state.a})`, height: 50}} zDepth={1} />

        {/*<ColorPickr onChange={this.onChange} value={this.state[this.props.option.key]}/>*/}
      </Dialog>
    );
  }
}
