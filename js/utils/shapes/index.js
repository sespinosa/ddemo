import roundRectangle from './roundRectangle'
import { semiCircle, cuarterCircle, circle } from './circle'
import { triangle, triangleArc } from './triangle'
import { arrowArc, arrowPoint, arrow } from './arrow'

const grid = () => {
  const ctx = window.ctx
  const w = window.canvas.width
  const h = window.canvas.height
  const scale = window.appScale || 1

  for(var i = 1; i < w || i < h; i += 300*scale) {

    ctx.moveTo( i, 0 );
    ctx.lineTo( i, h);

    ctx.moveTo( 0, i )
    ctx.lineTo( w, i)
  }
  ctx.strokeStyle = 'hsla(0, 0%, 80%, 1)'
  ctx.stroke()
}

export {
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
}
