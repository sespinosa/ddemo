import { logoBottom } from '../../utils/sprites'

const ctx = window.ctx
const cw = window.canvas.width
const ch = window.canvas.height

export default (offsetX, offsetY) => {

  const logo = new Image()

  logo.onload = () => {
    const lx = cw - logo.width - offsetX
    const ly = ch - logo.height - offsetY
    ctx.drawImage(logo, lx, ly)
  }

  logo.src = logoBottom

}
