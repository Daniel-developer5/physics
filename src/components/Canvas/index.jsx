import { useContext, useEffect, useRef } from 'react'
import AppCanvas from './draw'
import canvasConfig from './draw/canvasConfig'
import { AppContext } from '../../App'

import './Canvas.scss'

const Canvas = () => {
  const canvasRef = useRef()
  const {
    fallTime, height, lengthUnit,
    startFall, setStartFall
  } = useContext(AppContext)
  const appCanvas = new AppCanvas()

  useEffect(() => {
    const { offsetWidth: width, offsetHeight: height } = canvasRef.current
    
    canvasConfig.setConfig({
      width, height,
      $: canvasRef.current.getContext('2d'),
    })

    appCanvas.draw()
  }, [])

  useEffect(() => {
    if (height && lengthUnit) {
      appCanvas.height.draw(height, lengthUnit)
    }

    if (!height) {
      appCanvas.height.clear()
    }
  }, [height, lengthUnit])

  useEffect(() => {
    if (startFall && height) {
      console.log('start')
    }
  }, [startFall, height])

  return (
    <canvas
      className='app-canvas'
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
    ></canvas>
  )
}

export default Canvas
