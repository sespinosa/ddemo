import { toolBase } from './base'

const appState = window.appState

class arrowTool extends toolBase {

  constructor() {
    super('Arrow', 2)
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
    // if(!appState.tool.getFirstCord()) {
    //   appState.tool.setFirstCord(appState.getMousePos())
    //   appState.tool.addToTransitions()
    // }
    // else {
    //   appState.tool.setSecondCord(appState.getMousePos())
    //   appState.tool.addToState()
    //   appState.tool.close()
    // }

  }

  mDownHandler(e) {
    if(!appState.tool.getFirstCord()) {
      appState.tool.setFirstCord(appState.getMousePos())
      appState.tool.addToTransitions()
    }
  }

  mUpHandler(e) {
    if(appState.tool.getFirstCord() &&  !appState.tool.comCords(appState.tool.getFirstCord())) {
      appState.tool.setSecondCord(appState.getMousePos())
      appState.tool.addToState()
      appState.tool.close()
    }
  }

  getProps() {
    return {
      x1: this.getFirstCord().x,
      y1: this.getFirstCord().y,
      x2: this.getSecondCord().x,
      y2: this.getSecondCord().y
    }
  }

  getTransitionProps() {
    return {
      x: this.getFirstCord().x,
      y: this.getFirstCord().y
    }
  }

  reset() {
    this.setFirstCord(null)
    this.setSecondCord(null)
  }

  comCords(c) {
    return appState.tool.dist(c, appState.getMousePos()) < 50
  }

  dist(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y)
  }
}

export { arrowTool }
