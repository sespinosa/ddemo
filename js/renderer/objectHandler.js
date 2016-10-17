import sprites from '../utils/sprites'
import { renderLayer } from '../menu/components/layer'
import { renderBtnText, renderBtnImg } from '../menu/components/button'
import { updateActions } from './actionHandler'

const create_layer = (props) => {
  const p = Object.assign({}, props.props)
  renderLayer(p)
}

const create_button_text = (props) => {
  const e = Object.assign({}, props.events)
  const p = Object.assign({}, props.props)
  if(e.mouseOver) {
    p.lw = 3
    p.lc = '#79FF55'
  }
  renderBtnText(p)
}

const create_button_image = (props) => {
  const e = Object.assign({}, props.events)
  const p = Object.assign({}, props.props)
  p.sprite = sprites[p.sprite]
  if(e.mouseOver) {
    p.lw = 3
    p.lc = '#79FF55'
  }
  renderBtnImg(p)
}

const createObjects = () => {

  const queue = window.appState.getQueue()

  /* This function iterates over the state to render all the items every time */
  queue.forEach((el) => {
    switch(el.type) {
      case 'layer':
        create_layer(el)
        break
      case 'button_text':
        create_button_text(el)
        break
      case 'button_image':
        create_button_image(el)
        break
      default:
        return
    }
  })
}


export { createObjects, updateActions }
