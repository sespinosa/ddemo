const canvas = window.canvas

const evts = {
  mousemove : 'mousemove',
  click : 'click',
  mwheel: 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll'
}

const watchMouseEvents = () => {
  addEventListener(evts.mousemove, onMouseMove, false)
  addEventListener(evts.mwheel, onMouseWheel, false)
  //addEventListener(evts.click, onMouseClick, false)
}

const onMouseWheel = (e) => {
  window.appScale = window.appScale || 1

  if(e.wheelDelta < 0 && ((window.appScale) + (e.wheelDelta/500)) <= 0.1) {
    window.appScale = 0.1
  }
  else if(e.wheelDelta > 0 && ((window.appScale) + (e.wheelDelta/500)) >= 10) {
    window.appScale = 10
  }
  else {
    window.appScale = (window.appScale) + (e.wheelDelta/500)
  }

  console.log(`appScale: ${window.appScale}, %: ${parseInt(window.appScale*100)}`)


}

const onMouseMove = (e) => {

  const rect = canvas.getBoundingClientRect()
  const scaleX = canvas.width / rect.width
  const scaleY = canvas.height / rect.height

  window.appState.setMousePos({
    x: (e.clientX - rect.left) * scaleX,
    y: (e.clientY - rect.top) * scaleY
  })

}

const onMouseClick = (e) => {

  const ctx = window.ctx

  ctx.beginPath();
  ctx.arc(window.appState.getMousePos().x, window.appState.getMousePos().y, 10, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'green';
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#003300';
  ctx.stroke();

  cancelAnimationFrame(window.animationId)
}

export { watchMouseEvents }
