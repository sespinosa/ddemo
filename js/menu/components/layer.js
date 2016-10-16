import cfgLayer from './layer.json'
import { roundRectangle } from '../../utils/shapes'
import { renderBtnText } from './button'

export default () => {

  renderBtnText(45, 100, 50, 50, 'S')
  renderBtnText(105, 100, 50, 50, 'T')
  renderBtnText(165, 100, 50, 50, 'D')

  renderBtnText(45, 160, 50, 50, 'H')
  renderBtnText(105, 160, 50, 50, 'D')
  renderBtnText(165, 160, 50, 50, 'P')

  renderBtnText(45, 220, 50, 50, 'C')
  renderBtnText(105, 220, 50, 50, 'T')
  renderBtnText(165, 220, 50, 50, 'M')

  renderBtnText(45, 280, 110, 50, 'HDP')

  renderBtnText(45, 340, 170, 50, 'RECTM')

  renderBtnText(45, 400, 170, 170, 'SOSICK')

  roundRectangle(cfgLayer)
}
