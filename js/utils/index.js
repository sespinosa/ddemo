const appState = window.appState

const posByParent = (el) => {
  // console.log(el)
  if(el.parent) {
    const px = appState.getParent(el).props.x || 0
    const py = appState.getParent(el).props.y || 0

    const fixed = Object.assign({}, el)
    fixed.props.x = el.props.x + px
    fixed.props.y = el.props.y + py
    return fixed
  }
  return el
}

export { posByParent }
