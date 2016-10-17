export default ({ x, y, w, h, r = 0.1, lw = 1, bc = '#FFFFFF', lc = '#000000' }) => {
  const ctx = window.ctx
  const offset = Math.min(w, h) * r

  const a = [x, y]
  const b = [x + w, y]
  const c = [x + w, y + h]
  const d = [x, y + h]

  ctx.lineWidth = lw
  ctx.fillStyle = bc
  ctx.strokeStyle = lc

  ctx.beginPath()

  ctx.moveTo(x + offset, y)
  ctx.lineTo(x + w - offset, y)
  ctx.quadraticCurveTo(...b, x + w, y + offset)
  ctx.lineTo(x + w, y + h - offset)
  ctx.quadraticCurveTo(...c, x + w - offset, y + h)
  ctx.lineTo(x + offset, y + h)
  ctx.quadraticCurveTo(...d, x, y + h - offset)
  ctx.lineTo(x, y + offset)
  ctx.quadraticCurveTo(...a, x + offset, y)

  ctx.stroke()
  ctx.fill()

}
