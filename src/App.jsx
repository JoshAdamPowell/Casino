/* eslint-disable react-hooks/purity */
import { useState, useEffect } from 'react'
import './App.css'
import Input from './components/Input'
import ToggleBox from './components/ToggleBox';
import Blackjack from './pages/Blackjack';

function App() {
  const [streak, setStreak] = useState(0);
  const [hardMode, setHardMode] = useState(false);
  const [highRollerMode, setHighRollerMode] = useState(false);

  const [blackJack, setblackJack] = useState(false);

  const toggleBlackJack = () => {
    setblackJack(!blackJack);
  }

  const getX = () => {
    return Math.floor(Math.random() * 12) + 1;
  }

  const getY = () => {
    const values = highRollerMode ? [17, 35] : [2, 5, 8, 11, 17, 35];
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

  const toggleHardMode = () => {
    setHardMode(!hardMode);
  }

  const toggleHighRollerMode = () => {
    setHighRollerMode(!highRollerMode);
  }

  useEffect(() => {
    // Look, I know this isn't best practice but I'm lazy and it won't cascade. 
    // eslint-disable-next-line react-hooks/set-state-in-effect
    reset()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [highRollerMode])

  const getTestString = () => {
    if (!hardMode) {
      return `what is ${x} times ${y}?`;
    }


    switch(y) {
      case 2:
        return `What is the payout for ${x} chips in a column?`;
      
      case 5:
        return `What is the payout for ${x} chips in a six line?`;
      
      case 8:
        return `What is the payout for ${x} chips in a corner?`;

      case 11:
        return `What is the payout for ${x} chips in a street?`;

      case 17:
        return `What is the payout for ${x} chips on a split?`;

      case 35:
        return `What is the payout for ${x} chips straight up?`;

      default:
        return "Something has gone dreadfully wrong, shout at Josh!"
    }

  }

  return (
    <>
      <section id="center">
        <button onClick={() => toggleBlackJack()}>I want to practice {blackJack ? 'roulette' : 'blackjack'} instead...</button>
        <div className="hero">
          <img src={"https://i.ebayimg.com/images/g/48wAAOSwaeVnLELT/s-l1600.png"} className="base" width="170" height="179" alt="" />
        </div>
        {blackJack ? (<Blackjack></Blackjack>) :
        (<><div>
          <h1>Roulette test!</h1>
          <h2>{getTestString()} </h2>
        </div>
        <div>
          <Input submitAnswer={checkAndReset}/>  
        </div>
        {streak > 1 && 
        <h3>
          You have got {streak} correct answers in a row!  
        </h3>
        }
      <button onClick={() => reset()}>RESET</button>
      <ToggleBox
        label={"Only test my 17s and 35s"}
        value={highRollerMode}
        toggle={toggleHighRollerMode} />
      
      <ToggleBox
        label={"secret hard mode!"}
        value={hardMode}
        toggle={toggleHardMode} />
        </>)
        }
         
      </section>
    </>
  )
}

export default App
