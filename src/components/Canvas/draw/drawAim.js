import { colors } from './styles'
import canvasConfig from './canvasConfig'

const drawAim = () => {
  const { width, $ } = canvasConfig

  $.fillStyle = colors.DEFAULT
  $.beginPath()
  $.arc(width / 2, 40, 20, 0, Math.PI * 2)
  $.fill()
  $.closePath()
}

export default drawAim
