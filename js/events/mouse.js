const canvas = window.canvas

const watchMouseEvents = () => {
  addEventListener('mousemove', onMouseMove, false)
  //addEventListener('click', onMouseClick, false)
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
