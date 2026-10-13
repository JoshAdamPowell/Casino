/* eslint-disable react-hooks/purity */
import { useState } from 'react'
import './App.css'
import Input from './components/Input'

function App() {
  const [streak, setStreak] = useState(0);


  const getX = () => {
    
    return Math.floor(Math.random() * 12) + 1;
  }

  const getY = () => {
    const values = [2, 5, 8, 11, 17, 35];
    const selection = Math.floor(Math.random() * values.length);
    return values[selection];
  }

  const [x, setX] = useState(getX());

  const [y, setY] = useState(getY());

  const reset = () => {
    setX(getX());
    setY(getY());
  }

  const checkAndReset = (answer) => {
    if (parseInt(answer) === x * y) {
      alert("correct!");
      setStreak(streak + 1)
    } else {
      alert(`Incorrect, the correct answer is ${x * y}`);
      setStreak(0);
    }

    reset();
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={"https://i.ebayimg.com/images/g/48wAAOSwaeVnLELT/s-l1600.png"} className="base" width="170" height="179" alt="" />
        </div>
        <div>
          <h1>Roulette test!</h1>
          <h2>What is {x} times {y}? </h2>
        </div>
        <div>
          <Input submitAnswer={checkAndReset}/>  
        </div>
        {streak !== 0 && 
        <h3>
          You have got {streak} correct answers in a row!
        </h3>
        }
      <button onClick={() => reset()}>RESET</button>
      </section>
    </>
  )
}

export default App
