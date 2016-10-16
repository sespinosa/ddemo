import cfgLayer from './layer.json'
import cfgButtonsText from './buttons_text.json'
import cfgButtonsImg from './buttons_img.json'
import { roundRectangle } from '../../utils/shapes'
import { renderBtnText, renderBtnImg } from './button'
import logo from './logo_bottom'
import sprites from '../../utils/sprites'

const renderButtonsText = () => {
  cfgButtonsText.forEach((btn) => renderBtnText(...btn))
}
const renderButtonsImg = () => {
  cfgButtonsImg.forEach((btn) => {
    const spriteName = btn.pop()
    renderBtnImg(...btn, sprites[spriteName])
  })
}

export default () => {
  logo()
  renderButtonsText()
  renderButtonsImg()
  roundRectangle(cfgLayer)
}
