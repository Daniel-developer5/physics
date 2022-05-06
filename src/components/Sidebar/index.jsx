import Form from '../Form'
import SidebarFormula from './SidebarFormula'
import { useState } from 'react'

import './Sidebar.scss'

const AppSidebar = () => {
  const [ heightFormula, setHeightFormula ] = useState('h')
  const [ resultIn, setResultIn ] = useState('s')
  const [ digitsAfterDot, setDigitsAfterDot ] = useState(3)

  return (
    <div className='App-sidebar'>
      <Form
        setHeightFormula={setHeightFormula}
        resultIn={resultIn}
        setResultIn={setResultIn}
        digitsAfterDot={digitsAfterDot}
        setDigitsAfterDot={setDigitsAfterDot}
      />
      <div className='formula-box'>
        <SidebarFormula
          heightFormula={heightFormula}
          resultIn={resultIn}
          digitsAfterDot={digitsAfterDot}
        />
      </div>
    </div>
  )
}

export default AppSidebar
