import layer from './objects/layer.json'
import logo from './objects/logo.json'
import btnImgs from './objects/btnImg.json'
import btnTxts from './objects/btnTxt.json'
import { events } from '../../events'

const appState = window.appState

const ORIGIN = 'god'

/** Layer! **/
const layerId = appState.addElement(Object.assign(
  {}, { type: 'layer', origin: ORIGIN, parent: null }, { props: layer }
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
  appState.addElement({
        type: 'button_image',
        origin: ORIGIN,
        parent: layerId,
        events: events(),
        props: {
          x: o[0],
          y: o[1],
          w: o[2],
          h: o[3],
          sprite: o[4]
        }
      })
})

/* Text Buttons */

btnTxts.forEach((o) => {
  appState.addElement({
    type: 'button_text',
    origin: ORIGIN,
    parent: layerId,
    events: events(),
    props: {
      x: o[0],
      y: o[1],
      w: o[2],
      h: o[3],
      txt: o[4]
    }
  })
})


export { btnImgs, btnTxts }
