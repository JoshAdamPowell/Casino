import { useState } from "react";
import Input from "../components/Input";

const Blackjack = () => {
    const MAX_VALUE = 1000;

        const generateValue = () => {
        // eslint-disable-next-line react-hooks/purity
        const oneToTwoHundred = Math.floor(Math.random() * (MAX_VALUE / 5))

        return oneToTwoHundred * 5;
    }

    const [currentValue, setCurrentValue] = useState(generateValue());



    const reset = () => {
        setCurrentValue(generateValue())
    }

    const submit = (val) => {

        const correctAnswer = ((currentValue/ 5) * 6)
        if (parseInt(val) === correctAnswer) {
            alert("correct!")
        } else {
            alert(`incorrect, it should be ${correctAnswer}`)
        }
        reset();
    }

    return (<div>
        
        <h1>Blackjack!</h1>
        <h2> Calculate 6:5 payouts for {currentValue}</h2>
        <Input
            submitAnswer={submit}
        ></Input>
    </div>)
}

export default Blackjack