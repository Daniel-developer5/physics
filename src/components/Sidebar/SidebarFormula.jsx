import { MathJax, MathJaxContext } from 'better-react-mathjax'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../App'

const SidebarFormula = ({
  heightFormula, resultIn, digitsAfterDot
}) => {
  const { setFallTime } = useContext(AppContext)

  const config = {
    loader: { load: ['input/asciimath'] },
  }

  const getTime = height => +height ? Math.sqrt(+height * 2 / 9.8) : null

  useEffect(() => {
    if (+heightFormula) {
      setFallTime(getTime(heightFormula))
    }
  }, [heightFormula])

  const getEqualStr = (height, resultIn) => {
    let answer = getTime(height)

    if (resultIn === 'm') {
      answer /= 60
    } else if (resultIn === 'h') {
      answer = answer / 60 / 60
    }

    return +height
    ? ` = ${answer.toFixed(digitsAfterDot > 0 ? digitsAfterDot : 0)}${resultIn}`
    : ''
  }

  const input = (heightFormula && heightFormula !== 'h') ? ` * ${heightFormula}` : 'h'

  return (
    <MathJaxContext config={config}>
      <MathJax>{
        "`t = sqrt(frac(2" + input + ")(g))" + getEqualStr(heightFormula, resultIn) + "`"
      }</MathJax>
    </MathJaxContext>
  )
}

export default SidebarFormula
