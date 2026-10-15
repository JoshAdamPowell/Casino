import { useState } from "react";
import Input from "../components/Input";

const Blackjack = () => {
    const MAX_VALUE = 1000;
    const [threeToTwo, setThreeToTwo] = useState(0);

    const generateValue = () => {
        const denominator = threeToTwo ? 2 : 5;
        // eslint-disable-next-line react-hooks/purity
        const oneToTwoHundred = Math.floor(Math.random() * (MAX_VALUE / denominator))
        return oneToTwoHundred * denominator;
        
    }

    const [currentValue, setCurrentValue] = useState(generateValue());
    const [streak, setStreak] = useState(0);
    const [attempts, setAttempts] = useState(0);
    const [correct, setCorrect] = useState(0);


    const reset = () => {
        setCurrentValue(generateValue())
    }

    const toggleThreeToTwo = () => {
        setThreeToTwo(!threeToTwo);
        reset();
    }

    const submit = (val) => {

        const correctAnswer = threeToTwo ?
        ((currentValue/ 2) * 3)    
        :
        ((currentValue/ 5) * 6)
        if (parseInt(val) === correctAnswer) {
            alert("correct!")
            setStreak(streak + 1);
            setCorrect(correct + 1);
        } else {
            alert(`incorrect, it should be ${correctAnswer}`)
        }
        setAttempts(attempts + 1);
        reset();
    }

    return (<div>
        
        <h1>Blackjack!</h1>
        <h2> Calculate {threeToTwo ? '2:3' : '5:6'} payouts for {currentValue}</h2>
        <button onClick={() => toggleThreeToTwo()}>I would rather test my {threeToTwo ? '5:6' : '2:3'} payouts</button>
        <Input
            submitAnswer={submit}
        />
        <p>You have got {correct} answers correct out of {attempts}</p>
        {streak > 1 && 
            <h3>
            You have got {streak} correct answers in a row!  
            </h3>
        }
    </div>)
}

export default Blackjack