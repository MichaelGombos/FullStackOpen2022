import { useState } from 'react'

const Filter = (props) => {
  
  console.log(props.setFilter)
  // let setFilter = props.setFilter;
  
  // const handleFilterUpdate =  (e) => {
  //     setFilter(e.target.value)
  // }
    
  return (
      <div>
          <span>filaater shown with:</span> <input />
      </div>
    );
}

function areTheseObjectsEqual(first, second) {
  const al = Object.getOwnPropertyNames(first);
  const bl = Object.getOwnPropertyNames(second);

  // Check if the two list of keys are the same
  // length. If they are not, we know the objects
  // are not equal.
  if (al.length !== bl.length) return false;

  // Check that all keys from both objects match
  // are present on both objects.
  const hasAllKeys = al.every(value => !!bl.find(v => v === value));

  // If not all the keys match, we know the
  // objects are not equal.
  if (!hasAllKeys) return false;

  // We can now check that the value of each
  // key matches its corresponding key in the
  // other object.
  for (const key of al) if (first[key] !== second[key]) return false;

  // If the object hasn't return yet, at this
  // point we know that the objects are the
  // same
  return true;
}
let duplicate = false;
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,number:"123-123-1234"}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [currentFilter,setFilter] = useState('')
  
  const addEntry = (e) => {
    let currentText =e.target.firstChild.children[1].value;
    let currentNumber = e.target.children[1].children[1].value;
    //check that c doesn't exist in array
    
    for(let i = 0; i < persons.length; i++){
      if(areTheseObjectsEqual(currentText,persons[i].name)){
        console.log(`${currentText} is already added to the phoneBook`);
        e.preventDefault()
        return 0;
      }
    }
    setNewName(currentText);
    setNewNumber(currentNumber)
    setPersons([...persons,{name:currentText , number: currentNumber }]);
    
    console.log(persons)
    e.preventDefault()
    
    setNewName("")
  }
  

  
  //split this up into seperate components filter,entry, and list
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter props={setFilter}/>
      <h2>Add a new entry</h2>
      <form onSubmit={addEntry}>
      <div>
          <span>name:</span> <input />
      </div>
      <div>
          <span>number:</span> <input />
      </div>
      <div>
          <div>debug: {newName}</div>
          <button type="submit">add</button>
      </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.filter(dudeBro => dudeBro.name.includes(currentFilter)).map(dudeBro => 
      <li key={dudeBro.name}>
        <p style={{fontWeight:"bold",marginBottom:0}}>{dudeBro.name}</p>
        <em style={{fontSize:"13px"}}>{dudeBro.number}</em>
      </li> )}
      </ul>
    </div>
  )
}



const Entry = () => {
  
}

const List = () => {
  
}

export default App