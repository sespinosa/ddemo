const ctx = window.ctx

const baseArc = ({ x, y, r, bc = '#FFFFFF', lc = '#000000', lw = 1, angle }) => {
  ctx.beginPath()
  ctx.arc(x, y, r, 0, 2 * Math.PI, false)
  ctx.fillStyle = bc
  ctx.lineWidth = lw
  ctx.strokeStyle = lc
  ctx.fill()
  ctx.stroke()
  console.log(x, y, r)
}

const semiCircle = (props) => {
  props.angle = Math.PI
  baseArc(props)
}

const cuarterCircle = (props) => {
  props.angle = Math.PI/2
  baseArc(props)
}

const circle = (props) => {
  props.angle = 2 * Math.PI
  baseArc(props)
}

window.circle1 = circle

export { semiCircle, cuarterCircle, circle }
