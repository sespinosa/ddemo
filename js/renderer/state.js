import uuid from 'uuid'

const appState = {
  queue: [],
  mx: 0,
  my: 0,
  getQueue() {
    /* We return a new list,
    we dont want to mess with the original queue. */
    return [...this.queue]
  },
  showQueue() {
    console.log(this.queue)
  },
  addElement(el) {
    el.id = uuid.v1()
    this.queue.push(el)
    return el
  },
  pop() {
    return this.queue.pop()
  },
  removeById(id) {
    this.queue = this.queue.filter((el) => el.id !== id)
  },
  getParent(id) {
     const res = this.getQueue().filter((el) => el.parent === id)
     return res.length > 0 ? res : null
  },
  setMousePos({ x, y }) {
    this.mx = x
    this.my = y
  },
  getMousePos() {
    return Object.assign({}, { x: this.mx, y: this.my })
  }
}

window.appState = appState

export default appState
