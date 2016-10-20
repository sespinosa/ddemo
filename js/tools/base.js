import { events } from '../events'

class toolBase {

  constructor(toolName) {
    this._toolName = toolName
  }

  getToolName() {
    return this._toolName
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
  }

  close() {
    this.reset()
    window.appState.resetHandlers()
    window.appState.resetTool()
  }

  addToState () {
    appState.addElement({
      type: this.getToolName(),
      origin: 'USER',
      parent: null,
      events: events(),
      props: this.getProps()
    })
  }


}

export { toolBase }
