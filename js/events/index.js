import { watchMouseEvents } from './mouse'

const SchemaEvents = {
  selected: false,
  mouseOver: false,
  mousePress: false
}

const events = () => Object.assign({}, SchemaEvents)


const watchEvents = () => {
  watchMouseEvents()
}

export { events, watchEvents }
