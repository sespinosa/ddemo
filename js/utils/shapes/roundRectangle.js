export default ({ x, y, width, height, r = 0.1, lineWidth = 1 } ) => {

  const ctx = window.ctx
  const delta = r
  const w = width - ((width*delta)*2)
  const h = height - ((height*delta)*2)

  const start = [x+(width*delta), y]
  const second = [start[0]+w, y]
  const third = [x+width, y+(height*delta)]
  const fourth = [x+width, y+(height*delta)+h]
  const fifth = [start[0]+w, y+height]
  const sixth = [x+(width*delta), y+height]
  const seventh = [x, y+(height*delta)+h]
  const eigth = [x, y+(height*delta)]

  ctx.lineWidth = lineWidth

  ctx.beginPath()
  ctx.moveTo(...start)
  ctx.lineTo(...second)
  ctx.quadraticCurveTo(x+width, y, ...third)
  ctx.lineTo(...fourth)
  ctx.quadraticCurveTo(x+width, y+height, ...fifth)
  ctx.lineTo(...sixth)
  ctx.quadraticCurveTo(x, y+height, ...seventh)
  ctx.lineTo(...eigth)
  ctx.quadraticCurveTo(x, y, ...start)
  ctx.stroke()

}
