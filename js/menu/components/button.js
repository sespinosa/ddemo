import { roundRectangle } from '../../utils/shapes'

const ctx = window.ctx


const renderBtnText = (x, y, w, h, txt) => {
  roundRectangle({ x, y, width: w, height: h, r: 0.1 })
  const font = 'serif'
  const fontSize = h/4
  ctx.font = `${fontSize}px ${font}`;

  const tw = ctx.measureText(txt).width

  const tx = ((w - tw)/2) + x
  const ty = (y + h) - ((h - fontSize)/2)

  ctx.fillText(txt, tx, ty);
  ctx.fillText(txt, tx, ty);
}

// TODO:

export default () => {
  const ctx = window.ctx
}

export { renderBtnText }
