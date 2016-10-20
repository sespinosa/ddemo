import uuid from 'uuid'

const appState = {
  queue: [],
  transitions: [],
  tool: {},
  mClickHandler: null,
  mDownHandler: null,
  mUpHandler: null,
  mx: 0, /* Mouse absolute x */
  my: 0, /* Mouse absolute y */
  rx: 0, /* Screen relative x */
  ry: 0, /* Screen relative y */
  mrx: 0, /* Mouse relative x to the screen */
  mry: 0, /* Mouse relative y to the screen */
  getQueue() {
    /* We return a new list,
    we dont want to mess with the original queue. */
    return [...this.queue]
  },
  showQueue() {
    console.log(this.getQueue())
  },
  addElement(el) {
    el.id = uuid.v1()
    el.destroy = () => this.removeById(el.id)
    this.queue.push(el)
    return el
  },
  addTransition(el) {
    el.id = uuid.v1()
    this.transitions.push(el)
    return el
  },
  getTransitions() {
    return this.transitions
  },
  resetTransitions() {
    this.transitions = []
  },
  showTransitions() {
    console.log(this.getTransitions())
  },
  pop() {
    return this.queue.pop()
  },
  removeById(id) {
    this.queue = this.queue.filter((el) => el.id !== id)
  },
  removeUserObjects() {
    this.queue = this.queue.filter((o) => o.origin != 'USER')
  },
  getParent(el) {
     const res = this.getQueue().filter((e) => el.parent == e.id)
     return res.length > 0 ? res[0] : {}
  },
  setMousePos({ x, y }) {
    this.mx = x
    this.my = y

    this.mrx = x + this.rx
    this.mry = y + this.ry
  },
  getMousePos() {
    return Object.assign({}, { x: this.mx, y: this.my })
  },
  setRelativePos ({ x, y }) {
    this.rx = x
    this.ry = y
  },
  getRelativePos () {
    return { x: this.rx, y: this.ry }
  },
  setTool(tool) {
    this.tool = tool
  },
  resetTool() {
    this.tool = {}
  },
  setEventHandlers(mc, md, mu) {
    this.mClickHandler = mc
    this.mDownHandler = md
    this.mUpHandler = mu
  },
  resetHandlers() {
    this.mClickHandler = null
    this.mDownHandler = null
    this.mUpHandler = null
  }
}

window.appState = appState

export default appState
