import { mapToTools } from './mapToTools'

const canvas = window.canvas
const appState = window.appState


const evts = {
  mousemove : 'mousemove',
  click : 'click',
  mwheel: 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll',
  mouseDown: 'mousedown',
  mouseUp: 'mouseup'
}

const watchMouseEvents = () => {
  addEventListener(evts.mousemove, onMouseMove, false)
  addEventListener(evts.mwheel, onMouseWheel, false)
  addEventListener(evts.click, onMouseClick, false)
  addEventListener(evts.mouseDown, onMouseDown, false)
  addEventListener(evts.mouseUp, onMouseUp, false)
}

const onMouseWheel = (e) => {
  window.appScale = window.appScale || 1

  if(e.wheelDelta < 0 && ((window.appScale) + (e.wheelDelta/500)) <= 0.1) {
    window.appScale = 0.1
  }
  else if(e.wheelDelta > 0 && ((window.appScale) + (e.wheelDelta/500)) >= 10) {
    window.appScale = 10
  }
  else {
    window.appScale = (window.appScale) + (e.wheelDelta/500)
  }

  console.log(`appScale: ${window.appScale}, %: ${parseInt(window.appScale*100)}`)


}

const onMouseMove = (e) => {

  const rect = canvas.getBoundingClientRect()
  const scaleX = canvas.width / rect.width
  const scaleY = canvas.height / rect.height

  window.appState.setMousePos({
    x: (e.clientX - rect.left) * scaleX,
    y: (e.clientY - rect.top) * scaleY
  })

}

const onMouseClick = (e) => {
  if(appState.mClickHandler) {
    appState.mClickHandler(e)
  } else {
    mapToTools()
  }
}

const onMouseDown = (e) => {
  if(appState.mDownHandler) {
    appState.mDownHandler(e)
  }

}

const onMouseUp = (e) => {
  if(appState.mUpHandler) {
    appState.mUpHandler(e)
  }
}

export { watchMouseEvents }
