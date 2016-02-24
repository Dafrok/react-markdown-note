import Reflux from 'reflux'

const Actions = Reflux.createActions([
  'updateText',
])

let Store = Reflux.createStore({
  listenables: [Actions],
  text: '',
  onUpdateArticle (text) {
    this.text = text
    this.trigger(this.text)
  }
})

export {Actions}
export default Store
