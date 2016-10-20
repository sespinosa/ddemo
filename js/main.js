import 'babel-polyfill';
import canvas from './canvas'
import { appState, render, stopRender } from './renderer'
import { watchEvents } from './events'
import menu from './menu'
import tools from './tools'


watchEvents()
render()

// stopRender()

// setTimeout(() => {
//   stopRender()
//   console.log('Render Stoped')
// }, 1000)
