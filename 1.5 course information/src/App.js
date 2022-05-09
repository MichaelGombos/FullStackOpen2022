const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name :'Fundamentals of React',
      exercises:  10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name :'State of a component',
      exercises:  14
    }
    ]};

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

//refactor into three copmonents header content and total

const Header = ({course}) => {
  return (
    <header>
      {course}
    </header>
    )
}

const Content = ({parts}) => {
  return (
    <div>
      <Part part={parts[0].name} exercise={parts[0].exercises} />
      <Part part={parts[1].name} exercise={parts[1].exercises} />
      <Part part={parts[2].name} exercise={parts[2].exercises} />
    </div>
    )
}

const Part = ({part,exercise}) => {
  return (
    <div>
      <p> Part :: {part} - Exerciese :: {exercise} </p>
    </div>
    )
}

const Total = ({parts}) => {
  let total = parts[0].exercises + parts[1].exercises + parts[2].exercises;
  return (
    <div>
      <h2>Total Exercises :: {total} </h2>
    </div>
    )
}
export default App
