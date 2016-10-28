import { events } from '../events'

class toolBase {

  constructor(toolName, points) {
    this._toolName = toolName
    this.points = points
    this._transitionName = `${toolName}_transition`
  }

  getToolName() {
    return this._toolName
  }

  getTransitionName() {
    return this._transitionName
  }

  setStatus(status) {
    this._status = status
  }

  getStatus() {
    return this._status
  }

  setEventHandlers() {
    window.appState.setEventHandlers(this.mClickHandler, this.mDownHandler, this.mUpHandler)
  }

  getEvents() {
    return events()
  }

  set() {
    window.appState.setTool(this)
    this.setEventHandlers()
    if(this.initialTransition) this.addToTransitions()
  }

  close() {
    this.reset()
    window.appState.resetTransitions()
    window.appState.resetHandlers()
    window.appState.resetTool()
  }

  addToState () {
    appState.addElement({
      type: this.getToolName(),
      origin: 'USER',
      parent: null,
      events: events(),
      props: this.getProps(),
      points: this.points
    })
  }

  addToTransitions() {
    appState.addTransition({
      type: this.getTransitionName(),
      origin: 'USER',
      parent: null,
      props: this.getTransitionProps()
    })
  }


}

export { toolBase }
