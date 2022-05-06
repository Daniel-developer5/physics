import { MathJax, MathJaxContext } from "better-react-mathjax"

const SidebarFormula = ({
  heightFormula, resultIn, digitsAfterDot
}) => {
  const config = {
    loader: { load: ['input/asciimath'] },
  }

  let answer = Math.sqrt(+heightFormula * 2 / 9.8)

  if (resultIn === 'm') {
    answer /= 60
  } else if (resultIn === 'h') {
    answer = answer / 60 / 60
  }

  const input = (heightFormula && heightFormula !== 'h') ? ` * ${heightFormula}` : 'h'
  const equalStr = +heightFormula
    ? ` = ${answer.toFixed(digitsAfterDot > 0 ? digitsAfterDot : 0)}${resultIn}`
    : ''

  return (
    <MathJaxContext config={config}>
      <MathJax>{
        "`t = sqrt(frac(2" + input + ")(g))" + equalStr + "`"
      }</MathJax>
    </MathJaxContext>
  )
}

export default SidebarFormula
