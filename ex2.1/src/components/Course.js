import React from 'react'

const Header = ({course}) => {
  return (
    <h2>
      {course}
    </h2>
    )
}

const Content = ({parts}) => {
  return (
    // <div>
    //   <Part part={parts[0].name} exercise={parts[0].exercises} />
    //   <Part part={parts[1].name} exercise={parts[1].exercises} />
    //   <Part part={parts[2].name} exercise={parts[2].exercises} />
    // </div>
    <ul>{
      parts.map(part => <Part key={part.id} part={part.name} exercise={part.exercises} />)
    }</ul>
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
  const total = parts.map(part => part.exercises).reduce((p,c) => {
    // console.log(p+c)
    return(
      p+c
      )
    }
    )
  return (
    <div>
      <em>
        <h4>Total of {total} exercizes </h4>
      </em>
    </div>
    )
}

const Course = ({course}) =>{
    return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default Course