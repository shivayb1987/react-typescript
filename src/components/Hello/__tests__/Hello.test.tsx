import * as React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Hello from '../Pure'


describe('Hello.tsx', () => {
  test('Hello.tsx renders', () => {
    const { getByText } = render(<Hello count={1} />)
    expect(getByText('Current value is 1')).toBeInTheDocument()
  })  
  test('Counter increments', () => {
    const onIncrement = jest.fn()
    const onDecrement = jest.fn()
    const { getByText } = render(
      <Hello count={1} increment={onIncrement} decrement={onDecrement} />
    )
    const incrementBtn = getByText('+')
    fireEvent.click(incrementBtn)
    expect(onIncrement).toHaveBeenCalledTimes(1)
    const decrementBtn = getByText('-')
    fireEvent.click(decrementBtn)
    expect(onDecrement).toHaveBeenCalledTimes(1)
  })  
})