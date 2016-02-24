import Reflux from 'reflux'

const Actions = Reflux.createActions([
  'toggleNav',
])

let Store = Reflux.createStore({
  listenables: [Actions],
  isNavOpen: false,
  onToggleNav (bool) {
    this.isNavOpen = (typeof bool !== 'undefined' ? bool : !this.isNavOpen)
    this.trigger(this.isNavOpen)
  }
})

export {Actions}
export default Store
