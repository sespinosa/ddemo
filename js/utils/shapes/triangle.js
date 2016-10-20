const ctx = window.ctx

const triangle = ({ x1, y1, x2, y2, x3, y3, lw = 1, bc = '#FFFFFF', lc = '#000000' }) => {

  ctx.lineWidth = lw
  ctx.fillStyle = bc
  ctx.strokeStyle = lc

  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.lineTo(x3, y3)
  ctx.lineTo(x1, y1)
  ctx.fill()
  ctx.stroke()

}

const triangleArc = ({ x1, y1, x2, y2, x3, y3, lw = 1, bc = '#FFFFFF', lc = '#000000' }) => {
  const ox = (x1 + x2 + x3) / 3
  const oy = (y1 + y2 + y3) / 3

  ctx.lineWidth = lw
  ctx.fillStyle = bc
  ctx.strokeStyle = lc

  ctx.beginPath()
  ctx.moveTo(x3, y3)
  ctx.lineTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.quadraticCurveTo(ox, oy, x3, y3)
  ctx.fill()
  ctx.stroke()

}

const trianglePoint = ({ x1, y1, x2, y2, x3, y3, lw = 1, bc = '#FFFFFF', lc = '#000000' }) => {
  const ox = (x1 + x2 + x3) / 3
  const oy = (y1 + y2 + y3) / 3

  ctx.lineWidth = lw
  ctx.fillStyle = bc
  ctx.strokeStyle = lc

  ctx.beginPath()
  ctx.moveTo(x3, y3)
  ctx.lineTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.lineTo(ox, oy)
  ctx.lineTo(x3, y3)
  ctx.fill()
  ctx.stroke()

}

export { triangle, triangleArc, trianglePoint }
