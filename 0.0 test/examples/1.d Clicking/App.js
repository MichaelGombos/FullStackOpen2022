import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = (props) => {

  console.log(props);

  const { handleClick,text} = props
  return (
      <button onClick={handleClick}>
    {text}
  </button>
    )

}

const App = () => {
  const [clicks, setClicks] = useState({
  left: 0,
  right: 0
})
  const [allClicks, setAll] = useState([]);

const handleLeftClick = () => {
  const newClicks = {
    ...clicks,
    left: clicks.left +1
      }
      setAll(allClicks.concat('L'));
  setClicks(newClicks);
}

const handleRightClick = () => {
  const newClicks = {
    ...clicks,
    right:clicks.right+1
  }
  setAll(allClicks.concat('R'));
  setClicks(newClicks)
}
  return (
    <div>
      {clicks.left}
 <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />

      {clicks.right}
         <History allClicks={allClicks} />
    </div>
  )
}

export default App
