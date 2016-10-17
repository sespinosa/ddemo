import { roundRectangle } from '../../utils/shapes'

const ctx = window.ctx


const renderBtnText = ({ x, y, w, h, lw = 1, lc = '#000000', txt }) => {

  roundRectangle({ x, y, w, h, r: 0.1, lw, lc })

  const font = 'serif'
  const fontSize = h/4

  ctx.font = `${fontSize}px ${font}`

  const tw = ctx.measureText(txt).width

  const tx = ((w - tw)/2) + x
  const ty = (y + h) - ((h - fontSize)/2)

  ctx.fillStyle = lc
  ctx.fillText(txt, tx, ty);
}

const renderBtnImg = ({ x, y, w, h, lw = 1, lc = '#000000', sprite }) => {
  roundRectangle({ x, y, w, h, r: 0.1, lw , lc })

  const btnImg = new Image()
  btnImg.src = sprite

  const ix = x + (w * 0.1)
  const iy = y + (h * 0.1)
  ctx.drawImage(btnImg, ix, iy, w * 0.8, h * 0.8)
}

// TODO:

export default () => {
  const ctx = window.ctx
}

export { renderBtnText, renderBtnImg }
