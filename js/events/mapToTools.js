import { arrowTool, rectangleTool } from '../tools'

const appState = window.appState

const Tools = []

Tools.push(new arrowTool())
Tools.push(new rectangleTool())

const mapToTools = () => {
  appState.getQueue().forEach((o) => {
    if(o.events.mouseOver) {
      setByTool(o.toolName)
    }
  })
}

const setByTool = (toolName) => {
  if(toolName == 'Destroy') {
    appState.removeUserObjects()
  }
  Tools.forEach((t) => {
    if(t.getToolName() == toolName) t.set()
  })
}


export { mapToTools }
