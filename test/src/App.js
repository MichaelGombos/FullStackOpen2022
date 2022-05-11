import { useState } from 'react'

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
  
const App = () => {
  const [value, setValue] = useState(10)

  
  const hello = (who) => {
    return () => {
      console.log('hello', who)
    }
  }

  const setToValue = (newValue) => {
    console.log('Value Now', newValue)
    setValue(newValue)
  }
  


  
  return (
    <div>
      {value}
   <button onClick={() => setToValue(1000)}>thousand</button>
      <button onClick={() => setToValue(0)}>reset</button>
      <button onClick={() => setToValue(value + 1)}>increment</button>

    </div>
  )
}
export default App
