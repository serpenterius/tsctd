
import './Input.css'

type Props = {
    handleClick: () => void,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string
}

function Input({handleClick, handleChange, value}: Props) {
    return (
        <div className='inputs'>
            <input onChange={(e) => handleChange(e)} type="text" value={value}/>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default Input