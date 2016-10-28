import { toolBase } from './base'

const appState = window.appState

class rectangleTool extends toolBase {

  constructor() {
    super('Rectangle', 4)
    this._w = 200
    this._h = 100
    this.initialTransition = true
  }

  setX(x) {
    this._x = x
  }

  setY(y) {
    this._y = y
  }

  setW(w) {
    this._w = w
  }

  setH(h) {
    this._h = h
  }

  getW() {
    return this._w
  }

  getH() {
    return this._h
  }

  getX() {
    return this._x
  }

  getY() {
    return this._y
  }

  reset() {
    this.setX(null)
    this.setY(null)
    this.setW(200)
    this.setH(100)
  }

  mClickHandler(e) {
    const mx = appState.getMousePos().x
    const my = appState.getMousePos().y
    const tw = appState.tool.getW()
    const th = appState.tool.getH()
    appState.tool.setX(mx - (tw/2))
    appState.tool.setY(my - (th/2))
    appState.tool.addToState()
    appState.tool.close()
  }

  getProps() {
    return {
      x: this.getX(),
      y: this.getY(),
      w: this.getW(),
      h: this.getH()
    }
  }

  getTransitionProps() {
    return {
      w: this.getW(),
      h: this.getH()
    }
  }

}

export { rectangleTool }
