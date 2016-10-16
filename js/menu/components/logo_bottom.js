import { logoBottom } from '../../utils/sprites'

const ctx = window.ctx
const cw = window.canvas.width
const ch = window.canvas.height

export default () => {

  const logo = new Image()

  logo.onload = () => {
    const lx = cw - logo.width - 20
    const ly = ch - logo.height - 20
    ctx.drawImage(logo, lx, ly)
  }

  logo.src = logoBottom

}
