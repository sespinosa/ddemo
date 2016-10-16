import cfgLayer from './layer.json'
import cfgButtonsText from './buttons_text.json'
import { roundRectangle } from '../../utils/shapes'
import { renderBtnText } from './button'


const renderButtonsText = () => {
  cfgButtonsText.forEach((btn) => renderBtnText(...btn))
}


export default () => {
  renderButtonsText()
  roundRectangle(cfgLayer)
}
