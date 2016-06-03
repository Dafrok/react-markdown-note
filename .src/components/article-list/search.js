import React from 'react'
import IconButton from 'material-ui/IconButton'
import ActionSearch from 'material-ui/svg-icons/action/search'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import TextField from 'material-ui/TextField'
import ReactDOM from 'react-dom'
import '../../stylus/search.styl'

export default class Search extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
    muiTheme: React.PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      keyword: ''
    }
  }
  openSearch = () => {
    this.setState({
      active: true
    })
    ReactDOM.findDOMNode(this).querySelector('input').focus()
  }
  closeSearch = () => {
    this.setState({
      active: false
    })
  }
  search = e => {
    e.preventDefault()
    this.props.filter(this.state.keyword)
  }
  changeKeyword = e => {
    this.setState({
      keyword: e.target.value
    }, () => {
      this.props.filter(this.state.keyword)
    })
  }
  render() {
    return (
      <form className="search" onSubmit={this.search}>
        <IconButton
          onClick={this.openSearch}
          style={{marginTop: 8}}
          ><ActionSearch color={this.context.muiTheme.palette.alternateTextColor}/></IconButton>
        <TextField className={`input search ${this.state.active ? 'active' : ''}`}
          type='search'
          placeholder='Search'
          value={this.state.keyword}
          style={{
            paddingRight: 36,
            marginRight: -36,
            width: `${this.state.active ? '150px' : 0}`,
            top: -6,
            transition: 'width 300ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
          }}
          inputStyle={{
            color: this.context.muiTheme.palette.alternateTextColor,
            fontWeight: 400
          }}
          underlineStyle={{
            borderColor: this.context.muiTheme.palette.alternateTextColor
          }}
          underlineFocusStyle={{
            borderColor: this.context.muiTheme.palette.alternateTextColor,
          }}
          onChange={this.changeKeyword}
          id="search"
          name="search"/>
        {this.state.active && <IconButton
          onClick={this.closeSearch}
          style={{marginTop: 8}}
          ><NavigationClose color={this.context.muiTheme.palette.alternateTextColor}/></IconButton>}
      </form>
    );
  }
}
