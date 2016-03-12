import Reflux from 'reflux'

const Actions = Reflux.createActions([
  'onLogin',
])

let Store = Reflux.createStore({
  listenables: [Actions],
  token: '',
  onLogin (token) {
    this.token = token
    this.trigger(this.token)
  }
})

export {Actions}
export default Store
