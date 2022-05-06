import { useEffect, useRef } from 'react'
import AppCanvas from './draw'
import canvasConfig from './draw/canvasConfig'

import './Canvas.scss'

const Canvas = () => {
  const canvasRef = useRef()
  const appCanvas = new AppCanvas()

  useEffect(() => {
    const { offsetWidth: width, offsetHeight: height } = canvasRef.current
    
    canvasConfig.setConfig({
      width, height,
      $: canvasRef.current.getContext('2d'),
    })

    appCanvas.draw()
  }, [])

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
