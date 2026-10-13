import { useState } from "react";

const Input = ({submitAnswer}) => {
    const [value, setValue] = useState("");

    const submit = () => {
        setValue("");
        submitAnswer(value)
    }

    const handleEnter = (event) => {
        if (event.key === "Enter") {
            submit();
        }
    }

    return (
        <div>
            <input 
                onChange={(e) => setValue(e.target.value)} 
                value={value}
                onKeyDown={(e) => handleEnter(e)}></input>
            <div></div>
            <button onClick={submit}>SUBMIT</button>
        </div>
    )
}

export default Input;
