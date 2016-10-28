import sprites from '../utils/sprites'
import { renderLayer } from '../menu/components/layer'
import { renderBtnText, renderBtnImg } from '../menu/components/button'
import { updateActions } from './actionHandler'
import {
  roundRectangle,
  grid,
  semiCircle,
  cuarterCircle,
  circle,
  triangle,
  triangleArc,
  arrowArc,
  arrowPoint,
  arrow
} from '../utils/shapes'

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

const create_arrow = (props) => {
  const e = Object.assign({}, props.events)
  const p = Object.assign({}, props.props)
  if(e.mouseOver) {
    p.bc = '#79FF55'
    p.lc = '#79FF55'
  }
  arrowPoint({ x1: p.x2, y1: p.y2, x2: p.x1, y2: p.y1, bc: p.bc, lc: p.lc })
}

const create_arrow_transition = (props) => {
  const p = Object.assign({}, props.props)
  const mc = window.appState.getMousePos()
  p.bc = 'hsla(0, 0%, 0%, 0.2)'
  p.lc = 'hsla(0, 0%, 0%, 0.2)'
  arrowPoint({ x1: mc.x, y1: mc.y, x2: p.x, y2: p.y, bc: p.bc, lc: p.lc })
}

const create_rectangle = (props) => {
  const e = Object.assign({}, props.events)
  const p = Object.assign({}, props.props)
  if(e.mouseOver) {
    p.lw = 3
    p.lc = '#00FFFF'
  }

  roundRectangle({ x: p.x, y: p.y, w: p.w, h: p.h, bc: p.bc, lc: p.lc, lw: p.lw })
}

const create_rectangle_transition = (props) => {
  const p = Object.assign({}, props.props)
  const mx = window.appState.getMousePos().x
  const my = window.appState.getMousePos().y

  const rx = mx - (p.w/2)
  const ry = my - (p.h/2)

  // p.bc = 'hsla(0, 0%, 0%, 0.2)'
  p.lc = 'hsla(0, 0%, 0%, 0.2)'

  roundRectangle({ x: rx, y: ry, w: p.w, h: p.h, bc: p.bc, lc: p.lc, lw: 2 })
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
      case 'Arrow':
        create_arrow(el)
        break
      case 'Rectangle':
        create_rectangle(el)
        break
      case 'logo_bottom':
        break
      default:
        console.log('Theres no renderer for element:')
        console.log(el)
        return
    }
  })
  createTransitions()
}

const createTransitions = () => {
  const transitions = window.appState.getTransitions()

  transitions.forEach((t) => {
    switch (t.type) {
      case 'Arrow_transition':
        create_arrow_transition(t)
        break
      case 'Rectangle_transition':
        create_rectangle_transition(t)
        break
      default:
        console.log('Theres no renderer for transition:')
        console.log(t)
        return
    }
  })

}

export { createObjects, updateActions }
