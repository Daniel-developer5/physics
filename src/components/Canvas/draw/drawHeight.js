import canvasConfig from './canvasConfig'
import { fonts } from './styles'

const drawHeight = (height, lengthUnit) => {
  const { $, width } = canvasConfig  

  $.beginPath()
  $.font = fonts.getSmall()
  $.fillText(height + lengthUnit, width / 2 + 20 + 10, 40 + (fonts.SMALL_SIZE / 2))
  $.closePath()
}

export default drawHeight
