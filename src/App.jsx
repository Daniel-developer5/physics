import { createContext, useState } from 'react'
import Canvas from './components/Canvas'
import AppSidebar from './components/Sidebar'

import './App.scss'

export const AppContext = createContext()

const App = () => {
  const [ fallTime, setFallTime ] = useState(null)
  const [ height, setHeight ] = useState('')
  const [ lengthUnit, setLengthUnit ] = useState('m')
  const [ startFall, setStartFall ] = useState(false)

  const appContextItems = {
    fallTime, setFallTime, height,
    setHeight, lengthUnit, setLengthUnit,
    startFall, setStartFall
  }

  return (
    <AppContext.Provider value={appContextItems}>
      <div className='wrapper'>
        <Canvas />
        <AppSidebar />
      </div>
    </AppContext.Provider>
  )
}

export default App
