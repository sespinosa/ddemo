import { watchMouseEvents } from './mouse'

const SchemaEvents = {
  mouseOver: false,
  mousePress: false
}

const events = () => Object.assign({}, SchemaEvents)


const watchEvents = () => {
  watchMouseEvents()
}

export { events, watchEvents }
