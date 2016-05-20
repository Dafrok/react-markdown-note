import '../../stylus/colorpickr.styl'
import React from 'react'
import ColorPickr from 'react-colorpickr'
export default class Color extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
  }
  onChange (color) {
    console.log(color)
  }

  render() {
    return (
      <div>
        <ColorPickr onChange={this.onChange} />
      </div>
    );
  }
}
