let queue = []

const onMouseMoveUpdateObjects = () => {
  flagOnmouseOver()
}

const flagOnmouseOver = () => {
  const mOId = getLastChildId(
    queue.filter((el) => {
      if(el.props){
        return getIfInside(el.props)
      }
      return false
    })
  )
   window.appState.queue.forEach((el) => {
    if(el.events) {
      if(el.id === mOId) {
        el.events.mouseOver = true
      }
      else {
        el.events.mouseOver = false
      }
    }
  })
}

const getIfInside = ({x, y, w, h}) => {
  const mp = window.appState.getMousePos()
  if(mp.x >= x && mp.x <= x+w && mp.y >= y && mp.y <= y+h) {
    return true
  }
  return false
}

const getLastChildId = (elms) => {
  const res = elms.filter((el) => {
    let res = true
    elms.forEach((e) => {
      if(el.id == e.parent) res = false
    })
    return res
  })
  if(res.length == 1) return res[0].id
  else return null
}

const updateActions = () => {
  queue = window.appState.getQueue()
  onMouseMoveUpdateObjects()
}

export { updateActions }
