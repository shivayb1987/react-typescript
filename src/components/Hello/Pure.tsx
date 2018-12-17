import * as React from 'react'
import './Hello.css'

export interface Props {
  count: number,
  increment?: () => void,
  decrement?: () => void
}


function Hello ({count, increment, decrement}: Props) {
  return (
    <main>
      <section id='main'>
        <h2>Counter</h2>
        <div>Current value is {count}</div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </section>
    </main>
  )
}

export default Hello