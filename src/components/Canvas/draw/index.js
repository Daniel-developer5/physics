import canvasConfig from './canvasConfig'
import drawAim from './drawAim'
import drawHeight from './drawHeight'

export default class AppCanvas {
  draw = () => {
    drawAim()
  }

  height = {
    draw: (height, lengthUnit) => {
      this.clear()
      drawAim()
      drawHeight(height, lengthUnit)
    },
    clear: () => {
      this.clear()
      drawAim()
    },
  }

  clear = () => {
    const { $, width, height: canvasHeight } = canvasConfig
    $.clearRect(0, 0, width, canvasHeight)
  }
}
