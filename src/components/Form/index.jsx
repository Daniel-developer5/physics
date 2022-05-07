import {
  Button, Card, Checkbox, FormControlLabel, MenuItem,
  Radio, RadioGroup, Select, TextField
} from '@mui/material'
import { useContext, useState } from 'react'
import { AppContext } from '../../App'

import './Form.scss'

const Form = ({
  setHeightFormula, resultIn, setResultIn,
  digitsAfterDot, setDigitsAfterDot
}) => {
  const [ autoconvert, setAutoconvert ] = useState(true)
  const {
    height, setHeight, lengthUnit, 
    setLengthUnit, setStartFall, startFall
  } = useContext(AppContext)
  
  const setFormulaBySize = (value, paramSize) => {
    if ((paramSize || lengthUnit) === 'cm') {
      setHeightFormula(value / 100)
    } else if ((paramSize || lengthUnit) === 'km') {
      setHeightFormula(value * 1000)
    } else {
      setHeightFormula(value)
    }
  } 
  
  const onInput = e => {
    const { value } = e.target
    
    setHeight(value)

    if (+value < 0) {
      return
    }

    setFormulaBySize(value)
  }

  const convertSizes = (
    prevSize, firstValue, firstResult, secondValue, secondResult
  ) => {
    if (prevSize === firstValue) {
      setHeight(firstResult)
    } else if (prevSize === secondValue) {
      setHeight(secondResult)
    }
  }
  
  const onChangeSize = e => {
    const { value } = e.target
    const numHeight = +height

    if (autoconvert) {
      if (numHeight) {
        switch (lengthUnit) {
          case 'm':
            convertSizes(value, 'cm', numHeight * 100, 'km', numHeight / 1000)
            break
          case 'cm':
            convertSizes(value, 'm', numHeight / 100, 'km', numHeight / (100 * 1000))
            break
          case 'km':
            convertSizes(value, 'm', numHeight * 1000, 'cm', numHeight * (100 * 1000))
            break
        }
      }
    } else {
      setFormulaBySize(numHeight, value)
    }

    setLengthUnit(value)
  }

  const onSubmit = e => {
    e.preventDefault()
    
    if (!startFall) {
      setStartFall(true)
    }
  }

  return (
    <form className='App-form' onSubmit={onSubmit}>
      <Card>
        <div className='input-fields'>
          <TextField
            label='Enter height'
            variant='outlined'
            value={height}
            onChange={onInput}
            type='number'
            className='height-input'
          />
          <Select
            value={lengthUnit}
            className='size-select'
            onChange={onChangeSize}
          >
            <MenuItem value='m'>m</MenuItem>
            <MenuItem value='cm'>cm</MenuItem>
            <MenuItem value='km'>km</MenuItem>
          </Select>
        </div>
        <div className='autoconvert-checkbox'>
          <FormControlLabel
            control={
              <Checkbox
                checked={autoconvert} size='small'
                onChange={() => setAutoconvert(!autoconvert)}
              />
            }
            label='Auto-convertation'
          />
        </div>
        <div className='radio-buttons'>
          <label className='label'>Result is in:</label>
          <RadioGroup
            value={resultIn}
            onChange={e => setResultIn(e.target.value)}
            row
          >
            <FormControlLabel title='seconds' value='s' control={<Radio />} label='s' />
            <FormControlLabel title='minutes' value='m' control={<Radio />} label='m' />
            <FormControlLabel title='hours' value='h' control={<Radio />} label='h' />
          </RadioGroup>
        </div>
        <div className='round-result-input'>
          <TextField
            variant='standard'
            label='Digits after dot:'
            type='number'
            value={digitsAfterDot}
            onChange={e => setDigitsAfterDot(+e.target.value)}
          />
        </div>
        <div className='button-box'>
          <Button
            variant='contained'
            color='primary'
            type='submit'
          >Start</Button>
        </div>
      </Card>
    </form>
  )
}

export default Form
