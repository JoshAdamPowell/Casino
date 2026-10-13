import { v4 as uuidv4 } from 'uuid';

const ToggleBox = ({value, toggle, label}) => {

    const id = uuidv4();
    return(
        <>
        <label htmlFor={id}>{label}</label>
        <input
            id={id}
            value={value}
            type="checkbox"
            onClick={() => {toggle()}}
            />
        </>
    )
}

export default ToggleBox;

