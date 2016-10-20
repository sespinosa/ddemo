import { toolBase } from './base'

const appState = window.appState

class arrowTool extends toolBase {

  constructor() {
    super('Arrow')
    this._firstCord = null
    this._secondCord = null
  }

  setFirstCord(cords) {
    this._firstCord = cords
  }

  getFirstCord() {
    return this._firstCord
  }

  setSecondCord(cords) {
    this._secondCord = cords
  }

  getSecondCord() {
    return this._secondCord
  }

  mClickHandler(e) {
    if(!appState.tool.getFirstCord()) {
      appState.tool.setFirstCord(appState.getMousePos())
    }
    else {
      appState.tool.setSecondCord(appState.getMousePos())
      appState.tool.addToState()
      appState.tool.close()
    }

  }

  mDownHandler(e) {
    return
  }

  mUpHandler(e) {
    return
  }

  getProps() {
    return {
      x1: this.getFirstCord().x,
      y1: this.getFirstCord().y,
      x2: this.getSecondCord().x,
      y2: this.getSecondCord().y
    }
  }

  reset() {
    this.setFirstCord(null)
    this.setSecondCord(null)

  }
}

window.arrow = arrowTool

export { arrowTool }
