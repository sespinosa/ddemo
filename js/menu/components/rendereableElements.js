import layer from './objects/layer.json'
import logo from './objects/logo.json'
import btnImgs from './objects/btnImg.json'
import btnTxts from './objects/btnTxt.json'
import { events } from '../../events'
import { posByParent } from '../../utils'

const appState = window.appState

const ORIGIN = 'god'

/** Layer! **/
const layerId = appState.addElement(Object.assign(
  {}, { type: 'layer', origin: ORIGIN, parent: null, events: events() }, { props: layer }
)).id

/* Logo x, y is calculated from left to right with the offset */

appState.addElement(
  Object.assign(
    {},
    {
      type: 'logo_bottom',
      origin: ORIGIN,
      parent: null,
      events: events()
    },
    logo
  )
)

/** Image Buttons **/
/* Buttons are the layer childs */

btnImgs.forEach((o) => {
  let el = appState.addElement({
        type: 'button_image',
        toolName: o[0],
        origin: ORIGIN,
        parent: layerId,
        events: events(),
        props: {
          x: o[1],
          y: o[2],
          w: o[3],
          h: o[4],
          sprite: o[5]
        }
      })
  posByParent(el)
})

/* Text Buttons */

btnTxts.forEach((o) => {
  let el = appState.addElement({
    type: 'button_text',
    toolName: o[0],
    origin: ORIGIN,
    parent: layerId,
    events: events(),
    props: {
      x: o[1],
      y: o[2],
      w: o[3],
      h: o[4],
      txt: o[5]
    }
  })
  posByParent(el)
})


export { btnImgs, btnTxts }
