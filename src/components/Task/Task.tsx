import './task.css'

import { useState } from 'react'

import closeIcon from '../../assets/close-round-svgrepo-com.svg'
import doneIcon from '../../assets/done-svgrepo-com.svg'

type Props = {
    onDelete: (id: number) => void,
    onComplete: (id: number) => void,
    text: string,
    id: number,
    completed: boolean
}

export function Task({onDelete, onComplete, text, id, completed}: Props) {
    const [focus, setFocus] = useState<boolean>(false)

    const doneButton = (
        <button onClick={() => onComplete(id)} >
            <img className='done-icon' src={doneIcon} alt="" />
        </button>
    )

    const closeButton = (
        <button onClick={() => onDelete(id)}>
            <img className='close-icon' src={closeIcon} alt="" />
        </button>
    )



    const render = (
        <div className="task" onMouseEnter={() => setFocus(true)}>
            <p>{text}</p>
            <div className={focus ? 'buttons active' : 'buttons'}>
                {completed === false ? doneButton : null}
                {closeButton}
            </div>
        </div>   
    )

    return (
        {...render}
    )
}