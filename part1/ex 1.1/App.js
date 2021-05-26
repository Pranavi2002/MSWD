import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>Header</h1>
      <p>
        Hello the course name is {props.course}
      </p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <h1>Content</h1>
      <p>
        Hello the part1 name is {props.part1} , the  number of exercises in it are {props.exercises1}
      </p>
      <p>
        Hello the part2 name is {props.part2} , the  number of exercises in it are {props.exercises2}
      </p>
      <p>
      Hello the part3 name is {props.part3} , the  number of exercises in it are {props.exercises3}
      </p>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>
        <h1>Total</h1>
        Hello the total number of exercises is {props.total}
      </p>
    </div>
  )
}
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
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total  total={exercises1+exercises2+exercises3}/>
    </div>
  )
}
export default App
