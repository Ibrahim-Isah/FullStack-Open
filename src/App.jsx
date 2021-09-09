import React, { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'
import Test from './components/Test'
import Feedback from './projects/Feedback'

const App = () => {

  // useEffect(async () => {
  //   let course = await fetch('./raw.json')
  //   .then(res => res.json())
  //   .then(data => data.name)
  //   .catch(error => console.log(error))
  // }, [])

  async function getCourse(){
    const course = await fetch('./raw.json')
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error))

    return course
  }

  console.log(getCourse())
  
  return (
    <div>
      {/* <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} /> */}
      <Test />
    </div>
  )
}

export default App
