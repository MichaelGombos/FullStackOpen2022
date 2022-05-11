import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(7).fill(0))
  
  const setRandom = () =>{
    
    let randy = Math.floor(Math.random()*anecdotes.length);
    setSelected(randy);
  }
  
  const addVote = (index) => () => {
    console.log("vvote",index,vote[index])
    let newRay = vote;
    newRay[index] = newRay[index]+1
    setVote(newRay)
  }
  
  let mostVotes = 0;
  for(let i = 0; i < vote.length-1; i++){
    if(vote[i] > vote[i+1]){
      mostVotes = i;
    }
  }
  return (
    <div>
    <button onClick={setRandom}>Random</button>
    <button onClick={addVote(selected)}>Vote</button>
    
    <h1>Anectote:: </h1>
    <p>{anecdotes[selected]}</p>
    <em>This one has {vote[selected]} votes</em>
      
    <h1>Anectote with the <em>most</em> votes:: </h1>
    <p>{anecdotes[mostVotes]}</p>
    </div>
  )
}

export default App