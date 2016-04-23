import Reflux from 'reflux'

const Actions = Reflux.createActions([
  'toggleNav',
])

let Store = Reflux.createStore({
  listenables: [Actions],
  isNavOpen: false,
  onToggleNav (bool) {
    if (typeof bool === 'undefined') {
      this.isNavOpen = !bool
    } else if (bool) {
      this.isNavOpen = bool
      this.trigger(!bool)
    } else {
      this.isNavOpen = bool
      this.trigger(!bool)
    }
    this.trigger(this.isNavOpen)
    // this.isNavOpen = (typeof bool !== 'undefined' ? bool : !this.isNavOpen)
    // this.trigger(this.isNavOpen)
  }
})

export {Actions}
export default Store
