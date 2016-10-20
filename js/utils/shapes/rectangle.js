const ctx = window.ctx

const rectangle = ({ x, y, w, h, lc = '#000000', bc = '#FFFFFF', lw = 1 }) => {

  ctx.lineWidth = lw
  ctx.fillStyle = bc
  ctx.strokeStyle = lc

  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x + w, y)
  ctx.lineTo(x + w, y + h)
  ctx.lineTo(x, y + h)
  ctx.lineTo(x, y)

  ctx.fill()
  ctx.stroke()
}

export { rectangle }
