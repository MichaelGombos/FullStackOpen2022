const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14



  return (
    
    <div>
    
      <Header c={course} />
      <Content p1={part1} p2={part2} p3={part3} ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
      
      
    </div>
  )
}

//refactor into three copmonents header content and total

const Header = ({c}) => {
  return (
    <header>
      {c}
    </header>
    )
}

const Content = ({p1,p2,p3,ex1,ex2,ex3}) => {
  return (
    <div>
      <Part part={p1} exercise={ex1} />
      <Part part={p2} exercise={ex2} />
      <Part part={p3} exercise={ex3} />
    </div>
    )
}

const Part = ({part, exercise}) => {
  return (
    <div>
      <p> Part :: {part} - Exerciese :: {exercise} </p>
    </div>
    )
}

const Total = ({ex1,ex2,ex3}) => {
  let total = ex1 + ex2 + ex3;
  return (
    <div>
      <h2>Total Exercises :: {total} </h2>
    </div>
    )
}
export default App
