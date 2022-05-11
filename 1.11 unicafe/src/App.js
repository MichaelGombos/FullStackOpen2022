import { useState } from 'react'


const Stats = (props) => {

  //ray to take in values as -1 to 1 and then get the avg
  console.log(props);
  let gRay = new Array(props.good).fill(1);
  let nRay = new Array(props.neutral).fill(0);
  let bRay = new Array(props.bad).fill(-1);

  let avgRay = gRay.concat(nRay.concat(bRay))
  
  let total = props.good+props.bad+props.neutral;
  let positivePercent = (props.good/total)*100;
  
  
  let avg;
  if(avgRay.length > 0){
    avg = avgRay.reduce( (prev,current) => prev + current)/avgRay.length;
    
      return(
    <table>
      <tbody>
        <StatLine text="good" value={props.good}/>
        <StatLine text="neutral" value={props.neutral}/>
        <StatLine text="bad" value={props.bad}/>
        <StatLine text="average" value={avg}/>
        <StatLine text="positive" value={positivePercent}/>
      </tbody>
    </table>
  )
  }
  // If nothing in array of all inputs, display differently
  else{
    avg = 0;
    
    return(
      <div>
        <p>"Enter something"!!</p>
      </div>
      )
  }
  
  

}

const StatLine = (props) => {
  let text = props.text;
  let value = props.value;
  
  return(
    <tr><td>{text}</td><td>{value}</td></tr>
    )
}
  
  
const Button = (props) =>{
  const {handleClick,text} = props;
  
  return(    
    <button onClick={handleClick}>
      {text}
    </button>
    )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good+1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral"/>
      <Button handleClick={() => setBad(bad+1)} text="bad"/>
      <h1>Statistics</h1>
      <Stats good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App