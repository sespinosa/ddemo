import { createObjects, updateActions } from './objectHandler'
import { grid } from '../utils/shapes'

/** requestAnimationFrame polyfill **/
if ( !window.requestAnimationFrame ) {

	window.requestAnimationFrame = ( () => {
		return window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback, element) { window.setTimeout( callback, 1000 / 60 ) }
	} )();
}
/** end of polyfill **/
const ctx = window.ctx
const canvas = window.canvas

const render = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	grid()
	updateActions()
	createObjects()
  window.animationId = requestAnimationFrame(render)
}

const stopRender = () => cancelAnimationFrame(window.animationId)

export { render, stopRender }
