import Canvas from './components/Canvas'
import AppSidebar from './components/Sidebar'

import './App.scss'

const App = () => {
  return (
    <div className='wrapper'>
      <Canvas />
      <AppSidebar />
    </div>
  )
}

export default App
