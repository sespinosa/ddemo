import { triangle, triangleArc, trianglePoint } from './triangle'
import { circle } from './circle'

const ctx = window.ctx

const arrow = ({ x1, y1, x2, y2, bc = '#000000', lc = '#000000', lw = 1 }) => {

  let slope = Math.atan((y2 - y1) / (x2 - x1)) * 180/Math.PI;
  const os = Math.atan2((y2 - y1), (x2 - x1)) > 0 ? 1 : -1
  const os2 = (slope * os) > 0 ? 1 : -1

  const a = 15 + (os2 < 0 ? 180 : 0)
  const r = 50

  const hx2 = (r * Math.cos((slope-a) * Math.PI / 180.0)) + x1
  const hy2 = (r * Math.sin((slope-a) * Math.PI / 180.0)) + y1

  const hx3 = (r * Math.cos((slope+a) * Math.PI / 180.0)) + x1
  const hy3 = (r * Math.sin((slope+a) * Math.PI / 180.0)) + y1


  ctx.lineWidth = lw
  ctx.fillStyle = bc
  ctx.strokeStyle = lc

  ctx.beginPath()
  ctx.strokeStyle = '#000000'
  ctx.moveTo(x2, y2)
  ctx.lineTo(x1, y1)
  ctx.stroke()

  triangle({x1: x1, y1: y1, x2: hx2, y2: hy2, x3: hx3, y3: hy3, bc: '#000000'})
}

const arrowArc = ({ x1, y1, x2, y2, bc = '#000000', lc = '#000000', lw = 1 }) => {

  let slope = Math.atan((y2 - y1) / (x2 - x1)) * 180/Math.PI;
  const os = Math.atan2((y2 - y1), (x2 - x1)) > 0 ? 1 : -1
  const os2 = (slope * os) > 0 ? 1 : -1

  const a = 15 + (os2 < 0 ? 180 : 0)
  const r = 50

  const hx2 = (r * Math.cos((slope-a) * Math.PI / 180.0)) + x1
  const hy2 = (r * Math.sin((slope-a) * Math.PI / 180.0)) + y1

  const hx3 = (r * Math.cos((slope+a) * Math.PI / 180.0)) + x1
  const hy3 = (r * Math.sin((slope+a) * Math.PI / 180.0)) + y1


  ctx.lineWidth = lw
  ctx.fillStyle = bc
  ctx.strokeStyle = lc

  ctx.beginPath()
  ctx.moveTo(x2, y2)
  ctx.lineTo(x1, y1)
  ctx.stroke()

  triangleArc({x1: x1, y1: y1, x2: hx2, y2: hy2, x3: hx3, y3: hy3, bc: '#000000'})
}

const arrowPoint = ({ x1, y1, x2, y2, bc = '#000000', lc = '#000000', lw = 1 }) => {

  let slope = Math.atan((y2 - y1) / (x2 - x1)) * 180/Math.PI;
  const os = Math.atan2((y2 - y1), (x2 - x1)) > 0 ? 1 : -1
  const os2 = (slope * os) > 0 ? 1 : -1

  const a = 15 + (os2 < 0 ? 180 : 0)
  const r = 50

  const hx2 = (r * Math.cos((slope-a) * Math.PI / 180.0)) + x1
  const hy2 = (r * Math.sin((slope-a) * Math.PI / 180.0)) + y1

  const hx3 = (r * Math.cos((slope+a) * Math.PI / 180.0)) + x1
  const hy3 = (r * Math.sin((slope+a) * Math.PI / 180.0)) + y1


  ctx.lineWidth = lw
  ctx.fillStyle = bc
  ctx.strokeStyle = lc

  ctx.beginPath()
  ctx.moveTo(x2, y2)
  ctx.lineTo(x1, y1)
  ctx.stroke()

  triangleArc({x1: x1, y1: y1, x2: hx2, y2: hy2, x3: hx3, y3: hy3, bc, lc})
}

export { arrowArc, arrowPoint, arrow }
